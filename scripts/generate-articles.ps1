param(
  [string]$SourceDoc = 'D:\余秋慧\余氏AI-Official\06身心靈\陽光玫瑰\送你一束充滿陽光的玫瑰  全文版.doc'
)

$ErrorActionPreference = 'Stop'
$siteRoot = Split-Path -Parent $PSScriptRoot
$articleRoot = Join-Path $siteRoot 'articles'
New-Item -ItemType Directory -Force -Path $articleRoot | Out-Null

function Encode-Html([string]$value) {
  return [System.Net.WebUtility]::HtmlEncode($value)
}

$decoded = [Text.Encoding]::Unicode.GetString([IO.File]::ReadAllBytes($SourceDoc))
$allowed = '[\u4e00-\u9fffA-Za-z0-9０-９，。！？、；：「」『』（）《》〈〉…—．,.!?;:''""()\[\]【】／/％%＋+－\-＝=・·～~\s]{2,}'
$clean = ([regex]::Matches($decoded, $allowed) | ForEach-Object { $_.Value.Trim() } | Where-Object { $_ }) -join "`n"

$starts = @{}
$fallbackTitles = @{
  28 = '剪斷心中的那根臍帶'
  29 = '「不死」的秘訣'
  30 = '人的最高境界'
  31 = '先問「能容多少」'
  32 = '凡你所做，必回歸你身'
}
foreach ($number in 1..33) {
  $rose = $number.ToString('00')
  $matches = [regex]::Matches($clean, "玫瑰\s*$rose\s*[、，,]") | Where-Object { $_.Index -gt 2000 }
  if ($number -eq 25) {
    $special = [regex]::new('玫瑰33、找到你的「手錶」').Match($clean, 3000)
    if (-not $special.Success) { throw '找不到玫瑰25正文。' }
    $starts[$number] = $special.Index
  } elseif ($number -eq 29) {
    # In the manuscript, rose 29 first appears under the working heading
    # "學習熊蟲"; its final display title appears halfway through the article.
    $special = [regex]::new('玫瑰29、學習「熊蟲」').Match($clean, 3000)
    if (-not $special.Success) { throw '找不到玫瑰29正文。' }
    $starts[$number] = $special.Index
  } elseif ($fallbackTitles.ContainsKey($number)) {
    $fallback = [regex]::new([regex]::Escape($fallbackTitles[$number])).Match($clean, 3000)
    if (-not $fallback.Success) { throw "找不到玫瑰$rose 正文。" }
    $starts[$number] = $fallback.Index
  } elseif ($number -eq 33) {
    $starts[$number] = ($matches | Select-Object -Last 1).Index
  } else {
    if (-not $matches) { throw "找不到玫瑰$rose 正文。" }
    $starts[$number] = ($matches | Select-Object -First 1).Index
  }
}

$volumes = @{
  1 = '第一卷・為自己出征'
  2 = '第二卷・讓心自由地飛'
  3 = '第三卷・順著生命之流'
}

$titles = @{}
foreach ($number in 1..33) {
  $end = if ($number -lt 33) { $starts[$number + 1] } else { $clean.Length }
  $segment = $clean.Substring($starts[$number], $end - $starts[$number]).Trim()
  $lines = $segment -split '\r\n?|\n|\f' | ForEach-Object { $_.Trim() } | Where-Object { $_ }
  $heading = $lines[0] -replace '^玫瑰\s*\d{2}\s*[、，,]\s*', ''
  if ($number -eq 6) { $heading = "I'm possible" }
  if ($number -eq 25) { $heading = '找到你的「手錶」' }
  if ($fallbackTitles.ContainsKey($number)) { $heading = $fallbackTitles[$number] }
  $titles[$number] = $heading

  $bodyStart = if ($number -eq 6) { 2 } else { 1 }
  $bodyLines = @($lines | Select-Object -Skip $bodyStart | Where-Object {
    $_ -notmatch '^讀後心得(?:～?我的陽光玫瑰)?$' -and
    $_ -notmatch '^～?我的陽光玫瑰$' -and
    $_ -notmatch '^玫瑰\s*\d{2}\s*、' -and
    $_ -notmatch '^每一篇文章的末尾請' -and
    $_ -notmatch '^後記$' -and
    $_ -notmatch '^徵稿$'
  })
  $bodyLines = @($bodyLines | ForEach-Object {
    ($_ -replace '\s*【每一篇文章的末尾請放上一朵玫瑰的符號】\s*', '' `
        -replace '\s*【每一篇文章的末尾請留下心得區】\s*', '').Trim()
  } | Where-Object { $_ -and $_ -notmatch '^～?我的陽光玫瑰$' })

  # The legacy .doc contains an embedded binary block in rose 16. Keep the
  # paragraphs before and after it, and reconnect the sentence it interrupted.
  if ($number -eq 16) {
    $garbageStart = [Array]::IndexOf($bodyLines, '隧隄玄奦书')
    $resumeAt = -1
    for ($lineIndex = 0; $lineIndex -lt $bodyLines.Count; $lineIndex += 1) {
      if ($bodyLines[$lineIndex] -match '^歛了一點') { $resumeAt = $lineIndex; break }
    }
    if ($garbageStart -gt 0 -and $resumeAt -gt $garbageStart) {
      $reconnected = $bodyLines[$garbageStart - 1] + ($bodyLines[$resumeAt] -replace '^歛', '斂')
      $before = if ($garbageStart -gt 1) { @($bodyLines[0..($garbageStart - 2)]) } else { @() }
      $after = if ($resumeAt + 1 -lt $bodyLines.Count) { @($bodyLines[($resumeAt + 1)..($bodyLines.Count - 1)]) } else { @() }
      $bodyLines = @($before) + @($reconnected) + @($after)
    }
  }

  # Rose 33 is the final article. Stop before the book's afterword and
  # submission information, which are not part of the card story.
  if ($number -eq 33) {
    $afterwordAt = -1
    for ($lineIndex = 0; $lineIndex -lt $bodyLines.Count; $lineIndex += 1) {
      if ($bodyLines[$lineIndex] -match '^後記') { $afterwordAt = $lineIndex; break }
    }
    if ($afterwordAt -gt 0) { $bodyLines = @($bodyLines[0..($afterwordAt - 1)]) }
  }
  $paragraphs = ($bodyLines | ForEach-Object { "        <p>$(Encode-Html $_)</p>" }) -join "`n"
  $rose = $number.ToString('00')
  $volume = if ($number -le 11) { $volumes[1] } elseif ($number -le 22) { $volumes[2] } else { $volumes[3] }
  $previous = if ($number -gt 1) { '<a href="rose-{0}.html">← 玫瑰 {0}</a>' -f (($number - 1).ToString('00')) } else { '<span></span>' }
  $next = if ($number -lt 33) { '<a href="rose-{0}.html">玫瑰 {0} →</a>' -f (($number + 1).ToString('00')) } else { '<span></span>' }
  $htmlTitle = Encode-Html $heading

  $html = @"
<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="陽光玫瑰 $rose：$htmlTitle" />
    <title>玫瑰 $rose・$htmlTitle｜陽光玫瑰</title>
    <link rel="stylesheet" href="article.css" />
  </head>
  <body>
    <header class="article-header">
      <a class="brand" href="../index.html">陽光玫瑰</a>
      <a class="back-link" href="../index.html">返回抽牌</a>
    </header>
    <main>
      <article class="article-shell">
        <div class="article-hero">
          <img src="../assets/cards/陽光玫瑰卡-$rose.jpg" alt="玫瑰 $rose：$htmlTitle" />
          <div>
            <p class="volume">$(Encode-Html $volume)</p>
            <p class="rose-number">ROSE $rose</p>
            <h1>$htmlTitle</h1>
          </div>
        </div>
        <div class="article-body">
$paragraphs
        </div>
        <nav class="article-nav" aria-label="文章導覽">
          $previous
          <a href="../index.html">重新抽牌</a>
          $next
        </nav>
      </article>
    </main>
    <footer>送你一束充滿陽光的玫瑰</footer>
  </body>
</html>
"@
  [IO.File]::WriteAllText((Join-Path $articleRoot "rose-$rose.html"), $html, [Text.UTF8Encoding]::new($false))
}

Write-Output "已產生 33 篇文章：$articleRoot"
