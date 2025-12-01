# 更新作業

毎週土曜に実行

## 手順

### 伝票用とクリエ伝票用を月曜分まで出しておく

伝票用のシートは、前日分と数量が違うと色が変わる条件付き書式が適用されているので、月曜日分まで(明後日ボタン)印刷しておく

### バックアップを取っておく

更新前に必ずバックアップフォルダにコピーを保存

### 更新ボタンを押す

操作シートの更新ボタンを押す

```vb
Sub 更新()
    Dim ans As VbMsgBoxResult
    ans = MsgBox("更新作業を行います。よろしいですか？", vbOKCancel + vbQuestion, "更新確認")

    If ans = vbOK Then
        MsgBox "更新を始めます！", vbInformation
    Else
        MsgBox "キャンセルしました！", vbExclamation
        Exit Sub
    End If

    Application.ScreenUpdating = False
    Application.Calculation = xlCalculationManual
    Application.EnableEvents = False

    Dim ws操作 As Worksheet, ws As Worksheet
    Set ws操作 = Worksheets("操作")

    ws操作.Cells(1, 2).Value = ws操作.Cells(2, 2).Value

    Dim 先頭 As String, 末尾 As String, フラグ As Boolean
    Dim lastRow As Long
    先頭 = "先頭"
    末尾 = "クリエ末尾"
    フラグ = False

    For Each ws In ThisWorkbook.Worksheets
        If ws.name = 先頭 Then フラグ = True
        If フラグ Then
            With ws
                ' A列の5行目以降が空っぽならスキップ！
                lastRow = .Cells(.Rows.count, 1).End(xlUp).row
                If lastRow < 5 Or WorksheetFunction.CountA(.Range("A5:A" & lastRow)) = 0 Then
                    GoTo 次のシート
                End If

                ' J5:P最終行をコピー→C列に上書き
                .Range("J5:P" & lastRow).Copy
                .Cells(5, 3).PasteSpecial Paste:=xlPasteValues
            End With
        End If
        If ws.name = 末尾 Then Exit For
次のシート:
    Next ws

    Call フォーム後処理

    Application.ScreenUpdating = False
    Application.Calculation = xlCalculationAutomatic
    Application.EnableEvents = False
End Sub

```

もともとはフォームで検食入力を行っていたが、手入力の方が楽なことに気づき、やめたのでこんな名前になってる

```vb
Sub フォーム後処理()
    Dim ws操作 As Worksheet
    Set ws操作 = Worksheets("操作")

    ws操作.Activate
    ws操作.Cells(4, 2).Value = Now
    MsgBox "更新完了！", vbInformation
End Sub
```

### 検食入力

検食シートの翌週分(右側の 1 週間分)をすべて 0 にする
「プレミアム食パン 1/4」と「バターチキンカレーパン」は毎日検食分を確保するので、すべて`1`にする
菌検査スケジュールの表(紙媒体)を見ながら、該当日の該当商品を+1 していく

### 数量修正があればやる

店舗からの修正依頼や大幅な修正、新商品、お楽しみ袋などがあれば修正する
定休日があれば 0 にする。
イレギュラー後に数量を戻すのも忘れずに

### 全部まとめて出力

操作シートに戻り、全部まとめて出力ボタンをクリック

```vb
Sub 合計まとめて出力ボタン()
    Call 合計まとめて出力
    MsgBox "合計まとめて出力完了！", vbInformation
End Sub
```

```vb
Sub 全部まとめて出力()
    Application.ScreenUpdating = False
    Application.EnableEvents = False


    Call 合計まとめて出力
    Call まとめてラベル出し出力
    Call 生地出し並べ表まとめて出力
    Call 発注表作成
    Call 発注表_仕入先別出力

    Application.EnableEvents = True
    Application.ScreenUpdating = True

    MsgBox "CB製造合計、クリエイト製造合計、製造合計、" & vbCrLf & _
                "ラベル出し表、クリエイトラベル出し表、" & vbCrLf & _
                "冷凍生地出し表、スクラッチ生地出し表、並べる表、" & vbCrLf & _
                "発注表、仕入先別発注表" & vbCrLf & _
                "まとめて出力完了！", vbInformation

End Sub

```

```vb
Sub 合計まとめて出力()
    Application.ScreenUpdating = False
    Application.EnableEvents = False

    Call CB製造数合計出力
    Call クリエイト製造数合計出力
    Call 製造数合計出力

    Application.EnableEvents = True
    Application.ScreenUpdating = True
End Sub
```

```vb
Sub まとめてラベル出し出力()
    Application.ScreenUpdating = False
    Application.EnableEvents = False

    Call 消費期限チェック表出力
    Call クリエイト消費期限チェック表出力

    Application.EnableEvents = True
    Application.ScreenUpdating = True
End Sub

```

```vb
Sub 生地出し並べ表まとめて出力()
    Application.ScreenUpdating = False
    Application.EnableEvents = False

    Call 冷凍生地出し表出力
    Call スクラッチ生地出し表出力
    Call 並べる表出力
    Application.EnableEvents = True
    Application.ScreenUpdating = True
End Sub
```

このマクロの中身はあとで送るね

### 再びバックアップ

更新後またバックアップを忘れずに！！！！
