# 標準モジュール

```vb
Option Explicit

Sub CB製造数合計出力()
    Application.ScreenUpdating = False
    Application.Calculation = xlCalculationManual
    Application.EnableEvents = False

    CurrentMacroName = "CB製造数合計出力"
    Dim frm As New frmProgress
    frm.Show vbModeless
    frm.ShowProgress 0, "初期化中..."
    DoEvents

    Dim dic As Object, ws1 As Worksheet, ws2 As Worksheet
    Dim 先頭 As String, 末尾 As String, フラグ As Boolean
    Set dic = CreateObject("Scripting.Dictionary")
    Set ws1 = Worksheets("CB製造数")

    With ws1
        .Cells.Clear
        .Cells(1, 1).Value = "CB製造数"
        Dim sDay As Date, d As Long
        sDay = Worksheets("操作").Cells(1, 2).Value
        For d = 3 To 16
            .Cells(3, d).Value = sDay
            .Cells(3, d).NumberFormat = "m/d"
            sDay = sDay + 1
        Next d
        .Range("A4:P4").Value = Array("商品名", "売価", "月", "火", "水", "木", "金", "土", "日", "月", "火", "水", "木", "金", "土", "日")
    End With

    frm.ShowProgress 100, "初期化完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    frm.ShowProgress 0, "シート集計中..."
    DoEvents

    Dim wsList As Collection
    Set wsList = New Collection
    先頭 = "先頭"
    末尾 = "末尾"
    フラグ = False

    For Each ws2 In ThisWorkbook.Worksheets
        If ws2.name = 先頭 Then フラグ = True
        If フラグ Then wsList.Add ws2
        If ws2.name = 末尾 Then Exit For
    Next ws2

    Dim total As Long, count As Long
    total = wsList.count
    count = 0

    Dim ItemName As String, Price As Long
    Dim Mon1 As Long, Tue1 As Long, Wed1 As Long, Thu1 As Long, Fri1 As Long, Sat1 As Long, Sun1 As Long, _
        Mon2 As Long, Tue2 As Long, Wed2 As Long, Thu2 As Long, Fri2 As Long, Sat2 As Long, Sun2 As Long
    Dim i As Long, lastRow As Long, tempArray As Variant

    For Each ws2 In wsList
        count = count + 1
        frm.ShowProgress CLng(100 * count / total), "シート集計中：" & vbCrLf & ws2.name
        DoEvents

        lastRow = ws2.Cells(Rows.count, 1).End(xlUp).row

        For i = 5 To lastRow
            With ws2
                ItemName = Trim(.Cells(i, 1).Value)
                If ItemName = "" Then GoTo SkipRow

                If IsNumeric(.Cells(i, 2).Value2) Then
                    Price = .Cells(i, 2).Value2
                Else
                    Price = 0
                End If

                Mon1 = NzNum(.Cells(i, 3).Value2)
                Tue1 = NzNum(.Cells(i, 4).Value2)
                Wed1 = NzNum(.Cells(i, 5).Value2)
                Thu1 = NzNum(.Cells(i, 6).Value2)
                Fri1 = NzNum(.Cells(i, 7).Value2)
                Sat1 = NzNum(.Cells(i, 8).Value2)
                Sun1 = NzNum(.Cells(i, 9).Value2)
                Mon2 = NzNum(.Cells(i, 10).Value2)
                Tue2 = NzNum(.Cells(i, 11).Value2)
                Wed2 = NzNum(.Cells(i, 12).Value2)
                Thu2 = NzNum(.Cells(i, 13).Value2)
                Fri2 = NzNum(.Cells(i, 14).Value2)
                Sat2 = NzNum(.Cells(i, 15).Value2)
                Sun2 = NzNum(.Cells(i, 16).Value2)
            End With

            If dic.exists(ItemName) Then
                tempArray = dic(ItemName)
                If UBound(tempArray) >= 14 Then
                    tempArray(1) = tempArray(1) + Mon1
                    tempArray(2) = tempArray(2) + Tue1
                    tempArray(3) = tempArray(3) + Wed1
                    tempArray(4) = tempArray(4) + Thu1
                    tempArray(5) = tempArray(5) + Fri1
                    tempArray(6) = tempArray(6) + Sat1
                    tempArray(7) = tempArray(7) + Sun1
                    tempArray(8) = tempArray(8) + Mon2
                    tempArray(9) = tempArray(9) + Tue2
                    tempArray(10) = tempArray(10) + Wed2
                    tempArray(11) = tempArray(11) + Thu2
                    tempArray(12) = tempArray(12) + Fri2
                    tempArray(13) = tempArray(13) + Sat2
                    tempArray(14) = tempArray(14) + Sun2
                    dic(ItemName) = tempArray
                End If
            Else
                dic.Add ItemName, Array(Price, Mon1, Tue1, Wed1, Thu1, Fri1, Sat1, Sun1, Mon2, Tue2, Wed2, Thu2, Fri2, Sat2, Sun2)
            End If
SkipRow:
        Next i
    Next ws2

    frm.ShowProgress 100, "集計完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    frm.ShowProgress 0, "書き込み中..."
    DoEvents

    Dim k As Variant, list As Variant, row As Long
    Dim outputArray() As Variant
    list = dic.Keys
    total = UBound(list) + 1
    ReDim outputArray(1 To total, 1 To 16)
    row = 1
    count = 0

    For Each k In list
        count = count + 1
        frm.ShowProgress CLng(100 * count / total), "書き込み中：" & vbCrLf & k
        DoEvents

        tempArray = dic(k)
        outputArray(row, 1) = k
        outputArray(row, 2) = tempArray(0)
        For i = 1 To 14
            outputArray(row, i + 2) = tempArray(i)
        Next i
        row = row + 1
    Next k

    ws1.Range("A5:P" & (total + 4)).Value = outputArray

    frm.ShowProgress 100, "書き込み完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    frm.ShowProgress 0, "合計金額チェック中..."
    DoEvents

    lastRow = ws1.Cells(Rows.count, 1).End(xlUp).row
    For i = 3 To 16
        With ws1
            .Cells(2, i).Value = WorksheetFunction.SumProduct(.Range(.Cells(5, 2), .Cells(lastRow, 2)), .Range(.Cells(5, i), .Cells(lastRow, i)))
        End With
    Next i

    frm.ShowProgress 100, "チェック完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    frm.ShowProgress 0, "レイアウト整形中..."
    DoEvents

    With ws1
        frm.ShowProgress 10, "レイアウト整形中：書式設定中..."
        DoEvents

        .Cells.Font.Bold = True
        .Columns("A").ColumnWidth = 30
        .Columns("B").ColumnWidth = 8.1
        .Columns("C:P").ColumnWidth = 8.1
        .Rows("3:4").HorizontalAlignment = xlCenter
        .Rows("5:" & lastRow).RowHeight = 32
        .Rows(2).NumberFormat = "#,##0"

        frm.ShowProgress 20, "レイアウト整形中：書式設定中..."
        DoEvents

        With .Range("A1:P1")
            .HorizontalAlignment = xlCenterAcrossSelection
            .Font.Size = 24
        End With
        .Range("C2:P2").ShrinkToFit = True
        With .Range("C3:P4")
            .Borders.LineStyle = xlContinuous
            .Font.Size = 16
        End With

        frm.ShowProgress 30, "レイアウト整形中：書式設定中..."
        DoEvents

        With .Range("A4:B4")
            .Borders.LineStyle = xlContinuous
            .Font.Size = 14
        End With
        .Range("A4:P4").Borders(xlEdgeBottom).LineStyle = xlDouble
        With Union(.Cells(4, 8), .Cells(4, 15))
            .Font.Color = RGB(37, 101, 148)
        End With
        With Union(.Cells(4, 9), .Cells(4, 16))
            .Font.Color = RGB(235, 83, 59)
        End With

        frm.ShowProgress 40, "レイアウト整形中：書式設定中..."
        DoEvents

        With .Range("C5:P" & lastRow)
            .Font.Size = 16
            .HorizontalAlignment = xlCenter
        End With
        With .Range("A5:A" & lastRow)
            .Font.Size = 12
            .ShrinkToFit = True
        End With
        .Range("A5:P" & lastRow).Borders.LineStyle = xlContinuous
        .Range("I3:I" & lastRow).Borders(xlEdgeRight).LineStyle = xlDouble
        With .Range("B3:B" & lastRow)
            .Font.Size = 14
            .Borders(xlEdgeRight).LineStyle = xlDouble
        End With

        frm.ShowProgress 50, "レイアウト整形中：印刷設定中..."
        DoEvents

        With .PageSetup
            .PrintArea = "A1:P" & lastRow
            .Orientation = xlPortrait
            .PaperSize = xlPaperA4
            .Zoom = False
            .FitToPagesWide = 1
            .FitToPagesTall = 1
            .CenterHorizontally = True
            .CenterVertically = True

            frm.ShowProgress 70, "レイアウト整形中：余白設定中..."
            DoEvents

            .TopMargin = Application.CentimetersToPoints(0.1)
            .BottomMargin = Application.CentimetersToPoints(0.1)
            .LeftMargin = Application.CentimetersToPoints(0.1)
            .RightMargin = Application.CentimetersToPoints(0.1)
            .HeaderMargin = Application.CentimetersToPoints(0.1)
            .FooterMargin = Application.CentimetersToPoints(0.1)
        End With

        frm.ShowProgress 90, "レイアウト整形中：日時スタンプ準備中..."
        DoEvents

        .Range("T1").Value = Now
    End With

    frm.ShowProgress 100, "レイアウト完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    Unload frm

    Application.ScreenUpdating = True
    Application.Calculation = xlCalculationAutomatic
    Application.EnableEvents = True
End Sub

Sub 製造数合計出力()
    Application.ScreenUpdating = False
    Application.Calculation = xlCalculationManual
    Application.EnableEvents = False

    Dim frm As New frmProgress
    CurrentMacroName = "製造数合計出力"
    frm.Show vbModeless
    frm.ShowProgress 0, "初期化中..."
    DoEvents

    Dim dic As Object, ws1 As Worksheet, ws2 As Worksheet, ws3 As Worksheet
    Dim 先頭 As String, フラグ As Boolean, クリエ末尾 As String
    Set dic = CreateObject("Scripting.Dictionary")
    Set ws1 = Worksheets("製造数")
    Set ws3 = Worksheets("検食")

    ' 製造数シート初期化
    With ws1
        .Cells.Clear
        frm.ShowProgress 10, "初期化中..."
        DoEvents

        .Cells(1, 1).Value = "合計製造数"
        Dim sDay As Date, d As Long
        sDay = Worksheets("操作").Cells(1, 2).Value
        frm.ShowProgress 20, "初期化中..."
        DoEvents
        For d = 3 To 16
            .Cells(3, d).Value = sDay
            .Cells(3, d).NumberFormat = "m/d"
            sDay = sDay + 1
        Next d
        frm.ShowProgress 90, "初期化中..."
        DoEvents
        .Range("A4:P4").Value = Array("商品名", "売価", "月", "火", "水", "木", "金", "土", "日", "月", "火", "水", "木", "金", "土", "日")
    End With

    frm.ShowProgress 100, "初期化完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    frm.ShowProgress 0, "シート集計中..."
    DoEvents

    ' 対象シート一覧作成
    Dim wsList As Collection
    Set wsList = New Collection
    先頭 = "先頭"
    クリエ末尾 = "クリエ末尾"
    フラグ = False

    For Each ws2 In ThisWorkbook.Worksheets
        If ws2.name = 先頭 Then フラグ = True
        If フラグ Then wsList.Add ws2
        If ws2.name = クリエ末尾 Then Exit For
    Next

    ' シートごとの処理（進捗10?50%）
    Dim total As Long, count As Long
    total = wsList.count
    count = 0

    Dim ItemName As String, Price As Long
    Dim Mon1 As Long, Tue1 As Long, Wed1 As Long, Thu1 As Long, Fri1 As Long, Sat1 As Long, Sun1 As Long, _
        Mon2 As Long, Tue2 As Long, Wed2 As Long, Thu2 As Long, Fri2 As Long, Sat2 As Long, Sun2 As Long
    Dim i As Long, lastRow As Long, tempArray As Variant

    For Each ws2 In wsList
        count = count + 1
        frm.ShowProgress CLng(100 * count / total), "シート集計中: " & ws2.name
        DoEvents

        lastRow = ws2.Cells(Rows.count, 1).End(xlUp).row

        For i = 5 To lastRow
            With ws2
                ItemName = .Cells(i, 1).Value
                Price = .Cells(i, 2).Value2
                Mon1 = .Cells(i, 3).Value2: Mon2 = .Cells(i, 10).Value2
                Tue1 = .Cells(i, 4).Value2: Tue2 = .Cells(i, 11).Value2
                Wed1 = .Cells(i, 5).Value2: Wed2 = .Cells(i, 12).Value2
                Thu1 = .Cells(i, 6).Value2: Thu2 = .Cells(i, 13).Value2
                Fri1 = .Cells(i, 7).Value2: Fri2 = .Cells(i, 14).Value2
                Sat1 = .Cells(i, 8).Value2: Sat2 = .Cells(i, 15).Value2
                Sun1 = .Cells(i, 9).Value2: Sun2 = .Cells(i, 16).Value2
            End With

            If dic.exists(ItemName) Then
                tempArray = dic(ItemName)
                tempArray(1) = tempArray(1) + Mon1
                tempArray(2) = tempArray(2) + Tue1
                tempArray(3) = tempArray(3) + Wed1
                tempArray(4) = tempArray(4) + Thu1
                tempArray(5) = tempArray(5) + Fri1
                tempArray(6) = tempArray(6) + Sat1
                tempArray(7) = tempArray(7) + Sun1
                tempArray(8) = tempArray(8) + Mon2
                tempArray(9) = tempArray(9) + Tue2
                tempArray(10) = tempArray(10) + Wed2
                tempArray(11) = tempArray(11) + Thu2
                tempArray(12) = tempArray(12) + Fri2
                tempArray(13) = tempArray(13) + Sat2
                tempArray(14) = tempArray(14) + Sun2
                dic(ItemName) = tempArray
            Else
                dic.Add ItemName, Array(Price, Mon1, Tue1, Wed1, Thu1, Fri1, Sat1, Sun1, Mon2, Tue2, Wed2, Thu2, Fri2, Sat2, Sun2)
            End If
        Next i
    Next

    frm.ShowProgress 100, "集計完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    frm.ShowProgress 0, "書き込み中..."
    DoEvents

    ' 書き込み（進捗50?80%）
    Dim k As Variant, list As Variant, row As Long
    Dim outputArray() As Variant
    list = dic.Keys
    total = UBound(list) + 1
    ReDim outputArray(1 To total, 1 To 16)
    row = 1
    count = 0

    For Each k In list
        count = count + 1
        frm.ShowProgress CLng(100 * count / total), "書き込み中: " & vbCrLf & k
        DoEvents

        tempArray = dic(k)
        outputArray(row, 1) = k
        outputArray(row, 2) = tempArray(0)
        For i = 1 To 14
            outputArray(row, i + 2) = tempArray(i)
        Next i
        row = row + 1
    Next k

    ws1.Range("A5:P" & (total + 4)).Value = outputArray

    frm.ShowProgress 100, "書き込み完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    ' 以下の処理は元の80?100%部分と同じ（進捗は細かく刻まなくてOK）
    frm.ShowProgress 0, "合計金額・検食チェック中..."
    DoEvents

    Dim 合計金額(3 To 16) As Double
    For Each ws2 In wsList
        With ws2
            lastRow = .Cells(.Rows.count, 1).End(xlUp).row
            For row = 5 To lastRow
                For i = 3 To 16
                    Dim unitPrice As Variant, qty As Variant
                    unitPrice = .Cells(row, 2).Value
                    qty = .Cells(row, i).Value
                    If IsNumeric(unitPrice) And IsNumeric(qty) Then
                        Dim subtotal As Double
                        subtotal = unitPrice * qty
                        合計金額(i) = 合計金額(i) + subtotal
                    End If
                Next i
            Next row
        End With
    Next ws2

    For i = 3 To 16
        ws1.Cells(2, i).Value = 合計金額(i)
    Next i

    Dim endRow As Long, r As Long, c As Long
    With ws3
        endRow = .Cells(.Rows.count, 1).End(xlUp).row
        For r = 5 To endRow
           For c = 3 To 16
                If IsNumeric(.Cells(r, c).Value) Then
                    If .Cells(r, c).Value <> 0 Then
                        ws1.Cells(r, c).Interior.Color = RGB(253, 245, 221)
                    End If
                End If
           Next c
        Next r
    End With

    frm.ShowProgress 100, "チェック完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    frm.ShowProgress 0, "レイアウト整形中..."
    DoEvents

    With ws1
        frm.ShowProgress 10, "レイアウト整形中：書式設定中..."
        DoEvents
        lastRow = .Cells(.Rows.count, 1).End(xlUp).row
        .Cells.Font.Bold = True
        .Columns("A").ColumnWidth = 30
        .Columns("B").ColumnWidth = 8.1
        .Columns("C:P").ColumnWidth = 8.1
        .Rows("3:4").HorizontalAlignment = xlCenter
        .Rows("5:" & lastRow).RowHeight = 32
        .Rows(2).NumberFormat = "#,##0"

        frm.ShowProgress 20, "レイアウト整形中：書式設定中..."
        DoEvents

        With .Range("A1:P1")
            .HorizontalAlignment = xlCenterAcrossSelection
            .Font.Size = 24
        End With
        .Range("C2:P2").ShrinkToFit = True
        With .Range("C3:P4")
            .Borders.LineStyle = xlContinuous
            .Font.Size = 16
        End With

        frm.ShowProgress 30, "レイアウト整形中：書式設定中..."
        DoEvents

        With .Range("A4:B4")
            .Borders.LineStyle = xlContinuous
            .Font.Size = 14
        End With
        .Range("A4:P4").Borders(xlEdgeBottom).LineStyle = xlDouble
        With Union(.Cells(4, 8), .Cells(4, 15))
            .Font.Color = RGB(37, 101, 148)
        End With
        With Union(.Cells(4, 9), .Cells(4, 16))
            .Font.Color = RGB(235, 83, 59)
        End With

        frm.ShowProgress 40, "レイアウト整形中：書式設定中..."
        DoEvents

        With .Range("C5:P" & lastRow)
            .Font.Size = 16
            .HorizontalAlignment = xlCenter
        End With
        With .Range("A5:A" & lastRow)
            .Font.Size = 12
            .ShrinkToFit = True
        End With
        .Range("A5:P" & lastRow).Borders.LineStyle = xlContinuous
        .Range("I3:I" & lastRow).Borders(xlEdgeRight).LineStyle = xlDouble
        With .Range("B3:B" & lastRow)
            .Font.Size = 14
            .Borders(xlEdgeRight).LineStyle = xlDouble
        End With

        frm.ShowProgress 50, "レイアウト整形中：印刷設定中..."
        DoEvents

        With .PageSetup
            .PrintArea = "A1:P" & lastRow
            .Orientation = xlPortrait
            .PaperSize = xlPaperA4
            .Zoom = False
            .FitToPagesWide = 1
            .FitToPagesTall = 1
            .CenterHorizontally = True
            .CenterVertically = True

            frm.ShowProgress 70, "レイアウト整形中：余白設定中..."
            DoEvents

            .TopMargin = Application.CentimetersToPoints(0.1)
            .BottomMargin = Application.CentimetersToPoints(0.1)
            .LeftMargin = Application.CentimetersToPoints(0.1)
            .RightMargin = Application.CentimetersToPoints(0.1)
            .HeaderMargin = Application.CentimetersToPoints(0.1)
            .FooterMargin = Application.CentimetersToPoints(0.1)
        End With

        frm.ShowProgress 90, "レイアウト整形中：日時スタンプ準備中..."
        DoEvents

        .Range("T1").Value = Now
    End With

    frm.ShowProgress 100, "レイアウト完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    Unload frm

    Application.ScreenUpdating = True
    Application.Calculation = xlCalculationAutomatic
    Application.EnableEvents = True
End Sub

Sub クリエイト製造数合計出力()
    Application.ScreenUpdating = False
    Application.Calculation = xlCalculationManual
    Application.EnableEvents = False

    Dim frm As New frmProgress
    CurrentMacroName = "クリエイト製造数合計出力"
    frm.Show vbModeless
    frm.ShowProgress 0, "初期化中..."
    DoEvents

    Dim dic As Object, ws1 As Worksheet, ws2 As Worksheet
    Dim 先頭 As String, 末尾 As String, フラグ As Boolean
    Set dic = CreateObject("Scripting.Dictionary")
    Set ws1 = Worksheets("クリエ製造数")

    With ws1
        .Cells.Clear
        .Cells(1, 1).Value = "クリエイト製造数"
        Dim sDay As Date, d As Long
        sDay = Worksheets("操作").Cells(1, 2).Value
        For d = 3 To 16
            .Cells(3, d).Value = sDay
            .Cells(3, d).NumberFormat = "m/d"
            sDay = sDay + 1
        Next d
        .Range("A4:P4").Value = Array("商品名", "売価", "月", "火", "水", "木", "金", "土", "日", "月", "火", "水", "木", "金", "土", "日")
    End With

    frm.ShowProgress 100, "初期化完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    frm.ShowProgress 0, "シート集計中..."
    DoEvents

    Dim wsList As Collection
    Set wsList = New Collection
    先頭 = "クリエ先頭"
    末尾 = "クリエ末尾"
    フラグ = False

    For Each ws2 In ThisWorkbook.Worksheets
        If ws2.name = 先頭 Then フラグ = True
        If フラグ Then wsList.Add ws2
        If ws2.name = 末尾 Then Exit For
    Next ws2

    Dim total As Long, count As Long
    total = wsList.count
    count = 0

    Dim ItemName As String, Price As Long
    Dim Mon1 As Long, Tue1 As Long, Wed1 As Long, Thu1 As Long, Fri1 As Long, Sat1 As Long, Sun1 As Long, _
        Mon2 As Long, Tue2 As Long, Wed2 As Long, Thu2 As Long, Fri2 As Long, Sat2 As Long, Sun2 As Long
    Dim i As Long, lastRow As Long, tempArray As Variant

'クリエイトの合計
    For Each ws2 In wsList
        count = count + 1
        frm.ShowProgress CLng(100 * count / total), "シート集計中：" & vbCrLf & ws2.name
        DoEvents

        lastRow = ws2.Cells(Rows.count, 1).End(xlUp).row '商品名の最終行

        For i = 5 To lastRow
            With ws2
                ItemName = .Cells(i, 1).Value
                Price = .Cells(i, 2).Value2
                Mon1 = .Cells(i, 3).Value2: Mon2 = .Cells(i, 10).Value2
                Tue1 = .Cells(i, 4).Value2: Tue2 = .Cells(i, 11).Value2
                Wed1 = .Cells(i, 5).Value2: Wed2 = .Cells(i, 12).Value2
                Thu1 = .Cells(i, 6).Value2: Thu2 = .Cells(i, 13).Value2
                Fri1 = .Cells(i, 7).Value2: Fri2 = .Cells(i, 14).Value2
                Sat1 = .Cells(i, 8).Value2: Sat2 = .Cells(i, 15).Value2
                Sun1 = .Cells(i, 9).Value2: Sun2 = .Cells(i, 16).Value2
            End With

            If dic.exists(ItemName) Then
                tempArray = dic(ItemName)
                tempArray(1) = tempArray(1) + Mon1
                tempArray(2) = tempArray(2) + Tue1
                tempArray(3) = tempArray(3) + Wed1
                tempArray(4) = tempArray(4) + Thu1
                tempArray(5) = tempArray(5) + Fri1
                tempArray(6) = tempArray(6) + Sat1
                tempArray(7) = tempArray(7) + Sun1
                tempArray(8) = tempArray(8) + Mon2
                tempArray(9) = tempArray(9) + Tue2
                tempArray(10) = tempArray(10) + Wed2
                tempArray(11) = tempArray(11) + Thu2
                tempArray(12) = tempArray(12) + Fri2
                tempArray(13) = tempArray(13) + Sat2
                tempArray(14) = tempArray(14) + Sun2
                dic(ItemName) = tempArray
            Else
                dic.Add ItemName, Array(Price, Mon1, Tue1, Wed1, Thu1, Fri1, Sat1, Sun1, Mon2, Tue2, Wed2, Thu2, Fri2, Sat2, Sun2)
            End If
        Next i
    Next ws2

    frm.ShowProgress 100, "集計完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    frm.ShowProgress 0, "書き込み中..."
    DoEvents

'書き込み
    Dim k As Variant, list As Variant, row As Long
    Dim outputArray() As Variant
    list = dic.Keys
    total = UBound(list) + 1
    ReDim outputArray(1 To total, 1 To 16)
    row = 1
    count = 0

    For Each k In list
        count = count + 1
        frm.ShowProgress CLng(100 * count / total), "書き込み中：" & vbCrLf & k
        DoEvents

        tempArray = dic(k)
        outputArray(row, 1) = k
        outputArray(row, 2) = tempArray(0)
        For i = 1 To 14
            outputArray(row, i + 2) = tempArray(i)
        Next i
        row = row + 1
    Next k

    ws1.Range("A5:P" & (total + 4)).Value = outputArray

    frm.ShowProgress 100, "書き込み完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    frm.ShowProgress 0, "合計金額チェック中..."
    DoEvents

    lastRow = ws1.Cells(Rows.count, 1).End(xlUp).row

    For i = 3 To 16
        With ws1
            .Cells(2, i).Value = WorksheetFunction.SumProduct(.Range(.Cells(5, 2), .Cells(lastRow, 2)), .Range(.Cells(5, i), .Cells(lastRow, i)))
        End With
    Next i

    frm.ShowProgress 100, "チェック完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

'//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
'                                                                                     レイアウト調整
'//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    frm.ShowProgress 0, "レイアウト整形中..."
    DoEvents

    With ws1
        frm.ShowProgress 10, "レイアウト整形中：書式設定中..."
        DoEvents

        .Cells.Font.Bold = True
        .Columns("A").ColumnWidth = 30
        .Columns("B").ColumnWidth = 8.1
        .Columns("C:P").ColumnWidth = 8.1
        .Rows("3:4").HorizontalAlignment = xlCenter
        .Rows("5:" & lastRow).RowHeight = 32
        .Rows(2).NumberFormat = "#,##0"

        frm.ShowProgress 20, "レイアウト整形中：書式設定中..."
        DoEvents

        With .Range("A1:P1")
            .HorizontalAlignment = xlCenterAcrossSelection
            .Font.Size = 24
        End With
        .Range("C2:P2").ShrinkToFit = True
        With .Range("C3:P4")
            .Borders.LineStyle = xlContinuous
            .Font.Size = 16
        End With

        frm.ShowProgress 30, "レイアウト整形中：書式設定中..."
        DoEvents

        With .Range("A4:B4")
            .Borders.LineStyle = xlContinuous
            .Font.Size = 14
        End With
        .Range("A4:P4").Borders(xlEdgeBottom).LineStyle = xlDouble
        With Union(.Cells(4, 8), .Cells(4, 15))
            .Font.Color = RGB(37, 101, 148)
        End With
        With Union(.Cells(4, 9), .Cells(4, 16))
            .Font.Color = RGB(235, 83, 59)
        End With

        frm.ShowProgress 40, "レイアウト整形中：書式設定中..."
        DoEvents

        With .Range("C5:P" & lastRow)
            .Font.Size = 16
            .HorizontalAlignment = xlCenter
        End With
        With .Range("A5:A" & lastRow)
            .Font.Size = 12
            .ShrinkToFit = True
        End With
        .Range("A5:P" & lastRow).Borders.LineStyle = xlContinuous
        .Range("I3:I" & lastRow).Borders(xlEdgeRight).LineStyle = xlDouble
        With .Range("B3:B" & lastRow)
            .Font.Size = 14
            .Borders(xlEdgeRight).LineStyle = xlDouble
        End With

        frm.ShowProgress 50, "レイアウト整形中：印刷設定中..."
        DoEvents

        With .PageSetup
            .PrintArea = "A1:P" & lastRow
            .Orientation = xlPortrait
            .PaperSize = xlPaperA4
            .Zoom = False
            .FitToPagesWide = 1
            .FitToPagesTall = 1
            .CenterHorizontally = True
            .CenterVertically = True

            frm.ShowProgress 70, "レイアウト整形中：余白設定中..."
            DoEvents

            .TopMargin = Application.CentimetersToPoints(0.1)
            .BottomMargin = Application.CentimetersToPoints(0.1)
            .LeftMargin = Application.CentimetersToPoints(0.1)
            .RightMargin = Application.CentimetersToPoints(0.1)
            .HeaderMargin = Application.CentimetersToPoints(0.1)
            .FooterMargin = Application.CentimetersToPoints(0.1)
        End With

        frm.ShowProgress 90, "レイアウト整形中：日時スタンプ準備中..."
        DoEvents

        .Range("T1").Value = Now
    End With

    frm.ShowProgress 100, "レイアウト完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    Unload frm

    Application.ScreenUpdating = True
    Application.Calculation = xlCalculationAutomatic
    Application.EnableEvents = True
End Sub
```

```vb
Option Explicit

Sub 消費期限チェック表出力()
    Application.ScreenUpdating = False
    Application.Calculation = xlCalculationManual
    Application.EnableEvents = False

    Dim dic As Object, ws1 As Worksheet, ws2 As Worksheet
    Set dic = CreateObject("Scripting.Dictionary")
    Set ws1 = Worksheets("CB製造数")
    Set ws2 = Worksheets("ラベル出し")

    Dim frm As New frmProgress
    CurrentMacroName = "ローゼン消費期限チェック表出力"
    frm.Show vbModeless
    frm.ShowProgress 0, "初期化中..."
    DoEvents

    Dim Migi As String
    Migi = Worksheets("操作").Cells(5, 2).Value
    With ws2
        .Cells.Clear
        With .Cells(1, 1)
            .Value = "相鉄ローゼン ラベル出し消費期限チェック表"
            .Characters(1, 6).Font.Color = RGB(37, 101, 148)
        End With
        .Cells(2, 2).Value = "チェック担当者" & Migi
        With .Cells(3, 2)
            .Value = "ラベルを出す日" & Migi
            .Font.Color = RGB(37, 101, 148)
        End With

        Dim sDay As Date, d As Long
        sDay = Worksheets("操作").Cells(1, 2).Value - 1
        For d = 4 To 17 Step 2
            With .Cells(3, d)
                .Value = sDay
                .NumberFormat = "m/d(aaa)"
            End With
            With .Range(.Cells(2, d), .Cells(2, d + 1))
                .Merge
                .HorizontalAlignment = xlCenter
            End With
            With .Range(.Cells(3, d), .Cells(3, d + 1))
                .Merge
                .HorizontalAlignment = xlCenter
            End With
            sDay = sDay + 1
        Next d
        .Range("B2:C2").Merge
        .Range("B3:C3").Merge
        .Range("B2:C2").HorizontalAlignment = xlCenter
        .Range("B3:C3").HorizontalAlignment = xlCenter
        With .Range("A4:Q4")
            .Value = Array("商品名", "呼び出し番号", "売価", _
               "消費期限", "個数", "消費期限", "個数", _
               "消費期限", "個数", "消費期限", "個数", _
               "消費期限", "個数", "消費期限", "個数", _
               "消費期限", "個数")
            .HorizontalAlignment = xlCenter
        End With
    End With

    '--------------------------------
    ' ClsLabel生成
    '--------------------------------
    frm.ShowProgress 10, "データ集計中..."
    DoEvents

    Dim i As Long, lastRow As Long
    Dim panName As String, panPrice As Long
    Dim pMon As Long, pTue As Long, pWed As Long, pThu As Long, pFri As Long, pSat As Long, pSun As Long
    Dim pan As ClsLabel, allZero As Boolean
    lastRow = ws1.Cells(ws1.Rows.count, 1).End(xlUp).row

    For i = 5 To lastRow
        With ws1
            panName = .Cells(i, 1).Value
            panPrice = .Cells(i, 2).Value2
            pMon = .Cells(i, 3).Value2
            pTue = .Cells(i, 4).Value2
            pWed = .Cells(i, 5).Value2
            pThu = .Cells(i, 6).Value2
            pFri = .Cells(i, 7).Value2
            pSat = .Cells(i, 8).Value2
            pSun = .Cells(i, 9).Value2
        End With

        If Not dic.exists(panName) Then
            allZero = (pMon + pTue + pWed + pThu + pFri + pSat + pSun = 0)
            If allZero Then GoTo SkipNext
            Set pan = New ClsLabel
            pan.ItemName = panName
            pan.Price = panPrice
            pan.Mon = pMon: pan.Tue = pTue: pan.Wed = pWed
            pan.Thu = pThu: pan.Fri = pFri: pan.Sat = pSat: pan.Sun = pSun
            dic.Add panName, pan
        End If
SkipNext:
    Next i

    '--------------------------------
    ' 商品データから追加情報取得
    '--------------------------------
    Dim tbl As ListObject, r As ListRow
    Dim panLbl As Long, panExd As Long
    Set tbl = Worksheets("商品データ").ListObjects("商品データ")

    For Each r In tbl.ListRows
        panName = r.Range(1, tbl.ListColumns("商品名").Index).Value
        panLbl = r.Range(1, tbl.ListColumns("ラベル").Index).Value
        panExd = r.Range(1, tbl.ListColumns("期限").Index).Value

        If dic.exists(panName) Then
            Set pan = dic(panName)
            pan.Label = panLbl
            If IsNumeric(panExd) Then
                If panExd <= 1 Then
                    pan.ExDate = panExd + 1
                Else
                    pan.ExDate = panExd
                End If
            Else
                MsgBox "期限をチェックしてください：" & panName, vbExclamation
                Unload frm
                Exit Sub
            End If
        End If
    Next r

    '--------------------------------
    ' 一括書き込み：2次元配列化＋進行バー
    '--------------------------------
    frm.ShowProgress 30, "書き込みデータ準備中..."
    DoEvents

    Dim k As Variant, list As Variant, row As Long, j As Long
    Dim count As Long, total As Long
    Dim outputArray() As Variant, baseDate As Date
    list = dic.Keys
    ReDim outputArray(1 To dic.count, 1 To 17)
    row = 1
    count = 0
    total = dic.count

    For Each k In list
        count = count + 1
        frm.ShowProgress 30 + CLng(40 * count / total), "書き込み中：" & vbCrLf & k
        DoEvents

        Set pan = dic(k)
        outputArray(row, 1) = pan.ItemName
        outputArray(row, 2) = pan.Label
        outputArray(row, 3) = pan.Price

        For j = 0 To 6 '月～日のループ
            Dim qty As Long, col As Long
            col = 4 + j * 2
            Select Case j
                Case 0: qty = pan.Mon
                Case 1: qty = pan.Tue
                Case 2: qty = pan.Wed
                Case 3: qty = pan.Thu
                Case 4: qty = pan.Fri
                Case 5: qty = pan.Sat
                Case 6: qty = pan.Sun
            End Select

            If qty = 0 Then
                outputArray(row, col) = ""
                outputArray(row, col + 1) = ""
            Else
                baseDate = ws2.Cells(3, col).Value
                outputArray(row, col) = pan.ExDate + baseDate
                outputArray(row, col + 1) = qty
            End If
        Next j
        row = row + 1
    Next k

    ws2.Range("A5:Q" & 4 + dic.count).Value = outputArray

    '--------------------------------
    ' グレー塗り処理（そのまま）
    '--------------------------------
    frm.ShowProgress 75, "空欄チェック中..."
    DoEvents

    lastRow = ws2.Cells(ws2.Rows.count, 1).End(xlUp).row
    For i = 5 To lastRow
        For j = 4 To 17
            If ws2.Cells(i, j).Value = "" Then
                ws2.Cells(i, j).Interior.Color = RGB(100, 100, 100)
            Else
                ws2.Cells(i, j).Interior.ColorIndex = xlNone
            End If
        Next j
    Next i

    '--------------------------------
    ' レイアウト
    '--------------------------------
    frm.ShowProgress 90, "レイアウト整形中..."
    DoEvents

    With ws2
        .Cells.Font.Bold = True
        .Cells(1, 1).Font.Size = 20
        .Range("A1:Q1").HorizontalAlignment = xlCenterAcrossSelection
        .Range("B2:Q3").Borders.LineStyle = xlContinuous
        .Range("A4:Q4").Borders.LineStyle = xlContinuous
        .Range("D3:Q3").Font.Size = 14
        .Range("A5:Q" & lastRow).Borders.LineStyle = xlContinuous
        With .Range("B4")
            .Font.Color = RGB(255, 255, 255)
            .Interior.Color = RGB(82, 174, 164)
        End With

        frm.ShowProgress 93, "レイアウト整形中..."
        DoEvents

        With .Range("B5:B" & lastRow)
            .Font.Size = 16
            .Interior.Color = RGB(220, 239, 237)
        End With
        .Range("B5:Q" & lastRow).HorizontalAlignment = xlCenter
        .Range("C5:Q" & lastRow).Font.Size = 12
        .Range("A5:C" & lastRow).ShrinkToFit = True
        .Range("C5:C" & lastRow).NumberFormat = "#,##0円"
        With Union(.Columns("D"), .Columns("F"), .Columns("H"), .Columns("J"), .Columns("L"), .Columns("N"), .Columns("P"))
            .NumberFormat = "mm/dd"
            .ColumnWidth = 7
        End With

        frm.ShowProgress 94, "レイアウト整形中..."
        DoEvents

        With Union(.Columns("E"), .Columns("G"), .Columns("I"), .Columns("K"), .Columns("M"), .Columns("O"), .Columns("Q"))
            .Font.Color = RGB(37, 101, 148)
        End With
        .Rows("5:" & lastRow).RowHeight = 40
        With .PageSetup
            frm.ShowProgress 95, "レイアウト整形中..."
            DoEvents

            .PrintArea = "A1:Q" & lastRow
            .Orientation = xlPortrait
            .PaperSize = xlPaperA4
            .Zoom = False
            .FitToPagesWide = 1
            .FitToPagesTall = 2
            .CenterHorizontally = True
            .CenterVertically = False

            frm.ShowProgress 96, "レイアウト整形中..."
            DoEvents

            .TopMargin = Application.CentimetersToPoints(0.1)
            .BottomMargin = Application.CentimetersToPoints(0.1)
            .LeftMargin = Application.CentimetersToPoints(0.1)
            .RightMargin = Application.CentimetersToPoints(0.1)
            .HeaderMargin = Application.CentimetersToPoints(0.1)
            .FooterMargin = Application.CentimetersToPoints(0.1)
        End With

        frm.ShowProgress 98, "レイアウト整形中..."
        DoEvents
        .Range("V1").Value = Now
    End With

    frm.ShowProgress 100, "出力完了！！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")
    Unload frm

    Application.ScreenUpdating = True
    Application.Calculation = xlCalculationAutomatic
    Application.EnableEvents = True
End Sub

Sub クリエイト消費期限チェック表出力()
    Application.ScreenUpdating = False
    Application.Calculation = xlCalculationManual
    Application.EnableEvents = False

    Dim frm As New frmProgress
    CurrentMacroName = "クリエイト消費期限チェック表出力"
    frm.Show vbModeless
    frm.ShowProgress 0, "初期化中..."
    DoEvents

    Dim dic As Object, ws1 As Worksheet, ws2 As Worksheet
    Set dic = CreateObject("Scripting.Dictionary")

    Set ws1 = Worksheets("クリエ製造数")
    Set ws2 = Worksheets("クリエラベル出し")

    Dim Migi As String
    Migi = Worksheets("操作").Cells(5, 2).Value
    With ws2
        .Cells.Clear
        With .Cells(1, 1)
            .Value = "クリエイト ラベル出し消費期限チェック表"
            .Characters(1, 5).Font.Color = RGB(235, 83, 59) 'サーモンレッド
        End With
        .Cells(2, 2).Value = "チェック担当者" & Migi
         With .Cells(3, 2)
            .Value = "ラベルを出す日" & Migi
            .Font.Color = RGB(235, 83, 59)
         End With
        Dim sDay As Date, d As Long
        sDay = Worksheets("操作").Cells(1, 2).Value - 1
        For d = 4 To 17 Step 2
            With .Cells(3, d)
                .Value = sDay
                .NumberFormat = "m/d(aaa)"
            End With
            With .Range(.Cells(2, d), .Cells(2, d + 1))
                .Merge
                .HorizontalAlignment = xlCenter
            End With
            With .Range(.Cells(3, d), .Cells(3, d + 1))
                .Merge
                .HorizontalAlignment = xlCenter
            End With
            sDay = sDay + 1
        Next d
        With .Range("B2:C2")
           .Merge
           .HorizontalAlignment = xlCenter
        End With
        With .Range("B3:C3")
           .Merge
           .HorizontalAlignment = xlCenter
        End With
         With .Range("A4:Q4")
            .Value = Array( _
               "商品名", "呼び出し番号", "売価", _
               "消費期限", "個数", "消費期限", "個数", _
               "消費期限", "個数", "消費期限", "個数", _
               "消費期限", "個数", "消費期限", "個数", _
               "消費期限", "個数")
            .HorizontalAlignment = xlCenter
        End With
    End With

    frm.ShowProgress 10, "データ集計中..."
    DoEvents

    Dim i As Long, lastRow As Long
    Dim panName As String, panPrice As Long
    Dim pMon As Long, pTue As Long, pWed As Long, pThu As Long, pFri As Long, pSat As Long, pSun As Long
    Dim pan As ClsLabel, allZero As Boolean
    lastRow = ws1.Cells(Rows.count, 1).End(xlUp).row '商品の最終行

    For i = 5 To lastRow
        With ws1
            panName = .Cells(i, 1).Value
            panPrice = .Cells(i, 2).Value2
            pMon = .Cells(i, 3).Value2
            pTue = .Cells(i, 4).Value2
            pWed = .Cells(i, 5).Value2
            pThu = .Cells(i, 6).Value2
            pFri = .Cells(i, 7).Value2
            pSat = .Cells(i, 8).Value2
            pSun = .Cells(i, 9).Value2
        End With

        If Not dic.exists(panName) Then
            allZero = (pMon + pTue + pWed + pThu + pFri + pSat + pSun = 0) '1週間すべて0個の時
            If allZero Then GoTo SkipNext

            Set pan = New ClsLabel
            pan.ItemName = panName
            pan.Price = panPrice
            pan.Mon = pMon
            pan.Tue = pTue
            pan.Wed = pWed
            pan.Thu = pThu
            pan.Fri = pFri
            pan.Sat = pSat
            pan.Sun = pSun
            dic.Add panName, pan
        End If
SkipNext:
    Next i

    Dim tbl As ListObject, r As ListRow
    Dim panLbl As Long, panExd As Long
    Set tbl = Worksheets("商品データ").ListObjects("商品データ") '商品データテーブル

    For Each r In tbl.ListRows
        panName = r.Range(1, tbl.ListColumns("商品名").Index).Value
        panLbl = r.Range(1, tbl.ListColumns("クリエラベル").Index).Value
        panExd = r.Range(1, tbl.ListColumns("期限").Index).Value

        If dic.exists(panName) Then
            Set pan = dic(panName)
            pan.Label = panLbl
            If IsNumeric(panExd) Then
                If panExd <= 1 Then
                    pan.ExDate = panExd + 1
                Else
                    pan.ExDate = panExd
                End If
            Else
                MsgBox "期限をチェックしてください：" & panName, vbExclamation
                Unload frm
                Exit Sub
            End If
        End If
    Next r

    frm.ShowProgress 30, "書き込みデータ準備中..."
    DoEvents

    Dim k As Variant, list As Variant, row As Long, j As Long
    Dim count As Long, total As Long
    Dim outputArray() As Variant, baseDate As Date
    list = dic.Keys
    ReDim outputArray(1 To dic.count, 1 To 17)
    row = 1
    count = 0
    total = dic.count

    For Each k In list
        count = count + 1
        frm.ShowProgress 30 + CLng(40 * count / total), "書き込み中：" & vbCrLf & k
        DoEvents

        Set pan = dic(k)
        outputArray(row, 1) = pan.ItemName
        outputArray(row, 2) = pan.Label
        outputArray(row, 3) = pan.Price

        For j = 0 To 6 '月～日のループ
            Dim qty As Long, col As Long
            col = 4 + j * 2
            Select Case j
                Case 0: qty = pan.Mon
                Case 1: qty = pan.Tue
                Case 2: qty = pan.Wed
                Case 3: qty = pan.Thu
                Case 4: qty = pan.Fri
                Case 5: qty = pan.Sat
                Case 6: qty = pan.Sun
            End Select

            If qty = 0 Then
                outputArray(row, col) = ""
                outputArray(row, col + 1) = ""
            Else
                baseDate = ws2.Cells(3, col).Value
                outputArray(row, col) = pan.ExDate + baseDate
                outputArray(row, col + 1) = qty
            End If
        Next j
        row = row + 1
    Next k

    ws2.Range("A5:Q" & 4 + dic.count).Value = outputArray

    frm.ShowProgress 75, "空欄チェック中..."
    DoEvents

    lastRow = ws2.Cells(Rows.count, 1).End(xlUp).row '商品名の最終行
    For i = 5 To lastRow
        For j = 4 To 17
            With ws2
                If .Cells(i, j).Value = "" Then
                    .Cells(i, j).Interior.Color = RGB(100, 100, 100) '空欄は暗いグレーで塗りつぶす
                Else
                    .Cells(i, j).Interior.ColorIndex = xlNone
                End If
            End With
        Next j
    Next i
'///////////////////////////////////////////////////////////////////////////////////////////////////////
'                                                                                 レイアウト
'///////////////////////////////////////////////////////////////////////////////////////////////////////
    frm.ShowProgress 90, "レイアウト整形中..."
    DoEvents

    With ws2
        .Cells.Font.Bold = True
        .Cells(1, 1).Font.Size = 20
        .Range("A1:Q1").HorizontalAlignment = xlCenterAcrossSelection
        .Range("B2:Q3").Borders.LineStyle = xlContinuous
        .Range("A4:Q4").Borders.LineStyle = xlContinuous
        .Range("D3:Q3").Font.Size = 14
        .Range("A5:Q" & lastRow).Borders.LineStyle = xlContinuous
        With .Range("B4")
            .Font.Color = RGB(255, 255, 255) '白
            .Interior.Color = RGB(235, 83, 59) 'サーモンレッド
        End With

        frm.ShowProgress 93, "レイアウト整形中..."
        DoEvents

        With .Range("B5:B" & lastRow)
            .Font.Size = 16
            .Interior.Color = RGB(251, 219, 215) 'うすピンク
        End With
        .Range("B5:Q" & lastRow).HorizontalAlignment = xlCenter
        .Range("C5:Q" & lastRow).Font.Size = 12
        .Range("A5:C" & lastRow).ShrinkToFit = True
        .Range("C5:C" & lastRow).NumberFormat = "#,##0円"
        With Union(.Columns("D"), .Columns("F"), .Columns("H"), .Columns("J"), .Columns("L"), .Columns("N"), .Columns("P"))
            .NumberFormat = "mm/dd"
            .ColumnWidth = 7
        End With

        frm.ShowProgress 94, "レイアウト整形中..."
        DoEvents

        With Union(.Columns("E"), .Columns("G"), .Columns("I"), .Columns("K"), .Columns("M"), .Columns("O"), .Columns("Q"))
            .Font.Color = RGB(235, 83, 59) 'サーモンレッド
        End With
        .Rows("5:" & lastRow).RowHeight = 40
        With .PageSetup
            frm.ShowProgress 95, "レイアウト整形中..."
            DoEvents

            .PrintArea = "A1:Q" & lastRow
            .Orientation = xlPortrait
            .PaperSize = xlPaperA4
            .Zoom = False
            .FitToPagesWide = 1
            .FitToPagesTall = 2
            .CenterHorizontally = True
            .CenterVertically = False

            frm.ShowProgress 96, "レイアウト整形中..."
            DoEvents
'            余白設定
            .TopMargin = Application.CentimetersToPoints(0.1)
            .BottomMargin = Application.CentimetersToPoints(0.1)
            .LeftMargin = Application.CentimetersToPoints(0.1)
            .RightMargin = Application.CentimetersToPoints(0.1)
            .HeaderMargin = Application.CentimetersToPoints(0.1)
            .FooterMargin = Application.CentimetersToPoints(0.1)
        End With

        frm.ShowProgress 98, "レイアウト整形中..."
        DoEvents

        .Range("V1").Value = Now '更新日
    End With

    frm.ShowProgress 100, "出力完了！！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")
    Unload frm

    Application.ScreenUpdating = True
    Application.Calculation = xlCalculationAutomatic
    Application.EnableEvents = True
End Sub

```

```vb
Option Explicit

Public NotifyUser As Boolean
Public CurrentMacroName As String

Public Function LoadItemDictionary() As Object
    Dim dic As Object, wb As Workbook, ws As Worksheet, tbl As ListObject
    Set dic = CreateObject("Scripting.Dictionary")
    Set wb = Workbooks("CB商品データ.xlsm")
    Set ws = wb.Worksheets("商品データ")
    Set tbl = ws.ListObjects("商品データ")

    Dim r As ListRow, itm As ClsItem
    Dim ItemName As String

    For Each r In tbl.ListRows
        ItemName = r.Range(1, tbl.ListColumns("商品名").Index).Value
        If Not dic.exists(ItemName) Then
            Set itm = New ClsItem
            With itm
                .ItemID = r.Range(1, tbl.ListColumns("商品ID").Index)
                .ItemName = ItemName
                .Price = Nz(r.Range(1, tbl.ListColumns("売価").Index))
                .Price2 = Nz(r.Range(1, tbl.ListColumns("クリエ売価").Index))
                .Label = Nz(r.Range(1, tbl.ListColumns("ラベル").Index))
                .Label2 = Nz(r.Range(1, tbl.ListColumns("クリエラベル").Index))
                .Finder = Nz(r.Range(1, tbl.ListColumns("金探").Index))
                .Expiry = Nz(r.Range(1, tbl.ListColumns("期限").Index))
                .Dough = r.Range(1, tbl.ListColumns("生地名").Index).Value
                .Frozen = r.Range(1, tbl.ListColumns("冷生地").Index).Value
                .Display = r.Range(1, tbl.ListColumns("並べる表").Index).Value
                .FrozenDaysBefore = Nz(r.Range(1, tbl.ListColumns("生地出し").Index))
                .DisplayDays = Nz(r.Range(1, tbl.ListColumns("並べ").Index))
                .QtyPerUnit = Nz(r.Range(1, tbl.ListColumns("生地数").Index), 1)
                .UnitCount = Nz(r.Range(1, tbl.ListColumns("何個入").Index), 1)
                .maxQty = Nz(r.Range(1, tbl.ListColumns("最大数").Index))
                .Multiple = Nz(r.Range(1, tbl.ListColumns("倍数").Index))
                .Bag = Nz(r.Range(1, tbl.ListColumns("袋").Index))
                .Finish = Nz(r.Range(1, tbl.ListColumns("終売").Index))
            End With
            dic.Add ItemName, itm
        End If
    Next r

    Set LoadItemDictionary = dic
End Function

Public Function Nz(v, Optional defaultValue As Variant = 0)
'    引数1が空白とかだった時に代わりの数値(初期値は0、引数2に入力した数値)を返してくれる関数
    If IsError(v) Or IsEmpty(v) Or Trim(v & "") = "" Then
        Nz = defaultValue
    Else
        Nz = v
    End If
End Function

Function GetBaseName(ByVal fullName As String) As String
    Dim temp As String
    temp = Trim(fullName)

    temp = Replace(temp, " 1/2本", "")
    temp = Replace(temp, " 1/2", "")
    temp = Replace(temp, " 1/4", "")
    temp = Replace(temp, " 1本", "")
    temp = Replace(temp, " 1斤", "")
    temp = Replace(temp, " 2本", "")
    temp = Replace(temp, " 2斤", "")
    temp = Replace(temp, " 1個", "")
    temp = Trim(temp)

    GetBaseName = temp
End Function

Public Function LoadStoreDictionary() As Object
    Dim dic As Object
    Set dic = CreateObject("Scripting.Dictionary")

    Dim wb As Workbook, tbl As ListObject
    Set wb = Workbooks("CB商品データ.xlsm")
    Set tbl = wb.Worksheets("店舗マスター").ListObjects("ローゼン店舗マスター")

    Dim r As ListRow
    For Each r In tbl.ListRows
        If r.Range(1, tbl.ListColumns("非表示").Index).Value <> "〇" Then
            dic(r.Range(1, tbl.ListColumns("店舗名").Index).Value) = _
                r.Range(1, tbl.ListColumns("店舗番号").Index).Value
        End If
    Next r

    Set LoadStoreDictionary = dic
End Function

Public Function LoadCreateStoreDictionary() As Object
    Dim dic As Object
    Set dic = CreateObject("Scripting.Dictionary")

    Dim wb As Workbook, tbl As ListObject
    Set wb = Workbooks("CB商品データ.xlsm")
    Set tbl = wb.Worksheets("店舗マスター").ListObjects("クリエイト店舗マスター")

    Dim r As ListRow
    For Each r In tbl.ListRows
        If r.Range(1, tbl.ListColumns("非表示").Index).Value <> "〇" Then
            dic(r.Range(1, tbl.ListColumns("店舗名").Index).Value) = _
                r.Range(1, tbl.ListColumns("店舗番号").Index).Value
        End If
    Next r

    Set LoadCreateStoreDictionary = dic
End Function

Public Function ToSafeSheetName(ByVal s As String) As String
    s = Replace(s, "/", "・")
    s = Replace(s, "\", "・")
    s = Replace(s, "*", "＋")
    s = Replace(s, "[", "【")
    s = Replace(s, "]", "】")
    s = Replace(s, ":", "‐")
    s = Replace(s, "?", "")
    s = Trim(s)

    If Len(s) = 0 Then s = "未設定"
    If Len(s) > 31 Then s = Left(s, 31)

    ToSafeSheetName = s
End Function

Public Function ToSafeFileName(ByVal s As String) As String
    s = Replace(s, "\", "￥")
    s = Replace(s, "/", "／")
    s = Replace(s, ":", "：")
    s = Replace(s, "*", "＊")
    s = Replace(s, "?", "？")
    s = Replace(s, "[", "［")
    s = Replace(s, "]", "］")
    s = Trim(s)

    ' ファイル名として空なら既定名に
    If Len(s) = 0 Then s = "名称未設定"

    ToSafeFileName = s
End Function

Public Function NarabeSpill(panNames As Range, panQtys As Range, Optional ダミー As Variant) As Variant
    If IsMissing(ダミー) Then ダミー = Now()
    Dim dic As Object
    Set dic = LoadItemDictionary()

    Dim rCount As Long
    rCount = Application.Max(panNames.Rows.count, panNames.Columns.count)

    Dim results() As String
    ReDim results(1 To rCount, 1 To 1)

    Dim i As Long
    For i = 1 To rCount
        Dim name As String, qty As Variant
        name = Trim(panNames.Cells(i, 1).Value)
        qty = panQtys.Cells(i, 1).Value

        If name = "" Or IsEmpty(qty) Or qty = "" Then
            results(i, 1) = ""
        Else
            On Error GoTo エラー処理
            results(i, 1) = NarabeSingle(dic, name, CLng(qty))
            On Error GoTo 0
        End If
続き:
    Next i

    NarabeSpill = results
    Exit Function

エラー処理:
    results(i, 1) = "#ERROR"
    Resume 続き
End Function

Private Function NarabeSingle(dic As Object, panName As String, panQty As Long, Optional ダミー As Variant) As String
    If IsMissing(ダミー) Then ダミー = Now()
    Dim pan As ClsItem
    Dim maxQty As Long, proQty As Long

    If Not dic.exists(panName) Then
        NarabeSingle = "商品が見つかりません"
        Exit Function
    End If

    Set pan = dic(panName)
    maxQty = pan.maxQty
    proQty = pan.Multiple

    If proQty <= 0 Then proQty = 1
    If maxQty = 0 Then
        NarabeSingle = "最大数が見つかりません"
        Exit Function
    End If

    Dim a As Double, b As Double, c As Long
    Dim d As Long, e As Long
    a = panQty / proQty
    b = maxQty / proQty
    c = Application.RoundUp(a / b, 0)

    Do
        d = b * c - a
        e = c - d
        If e >= 0 Then Exit Do
        b = b - 1
    Loop

    If d = 0 Then
        NarabeSingle = (b * proQty) & "×" & e
    ElseIf e = 0 Then
        NarabeSingle = ((b - 1) * proQty) & "×" & d
    Else
        NarabeSingle = (b * proQty) & "×" & e & "、" & ((b - 1) * proQty) & "×" & d
    End If
End Function
Public Function LastRowValues(セル As Range, Optional ダミー As Variant) As Variant
    Dim c As Long, r As Long

    If IsMissing(ダミー) Then ダミー = Now()
    With セル.Worksheet
        c = セル.Column
        r = .Cells(.Rows.count, c).End(xlUp).row

        Dim rng As Range, v As Variant
        Set rng = .Range(セル, .Cells(r, c))
        v = rng.Value

        If IsArray(v) Then
            If UBound(v, 1) = 1 And UBound(v, 2) = 1 Then
                LastRowValues = v(1, 1)
            Else
                LastRowValues = v
            End If
        Else
            LastRowValues = v
        End If
    End With
End Function
Public Function KijiMei(panNames As Range, Optional ダミー As Variant) As Variant
    If IsMissing(ダミー) Then ダミー = Now()
    Dim dic As Object, pan As ClsItem
    Set dic = LoadItemDictionary()

    Dim rCount As Long
    rCount = Application.Max(panNames.Rows.count, panNames.Columns.count)
    Dim results() As String
    ReDim results(1 To rCount, 1 To 1)

    Dim i As Long
    For i = 1 To rCount
        Dim panName As String
        panName = Trim(panNames.Cells(i, 1).Value)

        If dic.exists(panName) Then
            Set pan = dic(panName)
            If Not IsEmpty(pan.Dough) And pan.Dough <> "" Then
                results(i, 1) = pan.Dough
            Else
                results(i, 1) = ""
            End If
        Else
            results(i, 1) = ""
        End If
    Next i

    KijiMei = results
End Function

Public Function Kigen(panNames As Range, Optional ダミー As Variant) As Variant
    If IsMissing(ダミー) Then ダミー = Now()
    Dim dic As Object, pan As ClsItem
    Set dic = LoadItemDictionary()

    Dim rCount As Long
    rCount = Application.Max(panNames.Rows.count, panNames.Columns.count)
    Dim results() As Variant
    ReDim results(1 To rCount, 1 To 1)

    Dim i As Long
    For i = 1 To rCount
        Dim panName As String
        panName = Trim(panNames.Cells(i, 1).Value)

        If dic.exists(panName) Then
            Set pan = dic(panName)
            If pan.DisplayDays > 0 Then
                results(i, 1) = pan.DisplayDays
            Else
                results(i, 1) = ""
            End If
        Else
            results(i, 1) = ""
        End If
    Next i

    Kigen = results
End Function
Public Function NzNum(val As Variant) As Long
    If IsNumeric(val) Then
        NzNum = CLng(val)
    Else
        NzNum = 0
    End If
End Function

Public Function GetItemList(targetSheetName As String, dateCell As Range, itemArray As Variant) As Variant
    Dim ws As Worksheet
    On Error Resume Next
    Set ws = ThisWorkbook.Worksheets(targetSheetName)
    On Error GoTo 0

    If ws Is Nothing Then
        GetItemList = CVErr(xlErrRef) 'シートがなければ#REF!を返す
        Exit Function
    End If

    Dim headerRow As Range
    Set headerRow = ws.Range("C3:P3")

    Dim dateCol As Long
    On Error Resume Next
    dateCol = Application.WorksheetFunction.Match(CStr(dateCell.Value), headerRow, 0)
    On Error GoTo 0

    If dateCol = 0 Then
        GetItemList = CVErr(xlErrNA) '日付列がなければ#N/A!を返す
        Exit Function
    End If

    Dim lastRow As Long
    lastRow = ws.Cells(ws.Rows.count, 1).End(xlUp).row

    Dim itemNames As Variant
    itemNames = ws.Range("A5:A" & lastRow).Value

    Dim dataValues As Variant
    dataValues = ws.Range("C5:P" & lastRow).Value

    Dim dic As Object
    Set dic = CreateObject("Scripting.Dictionary")

    Dim i As Long
    For i = 1 To UBound(itemNames, 1)
        If Not dic.exists(CStr(itemNames(i, 1))) Then
            dic.Add CStr(itemNames(i, 1)), i '値→行番号
        End If
    Next i

    Dim arrayCount As Long
    arrayCount = UBound(itemArray, 1)

    Dim result() As Variant
    ReDim result(1 To arrayCount, 1 To 1)

    Dim key As String, rowIndex As Long
    For i = 1 To arrayCount
        key = CStr(itemArray(i, 1))

        If dic.exists(key) Then
            rowIndex = dic(key)
            result(i, 1) = dataValues(rowIndex, dateCol)
        Else
            result(i, 1) = ""
        End If
    Next i

    GetItemList = result
End Function
```

```vb
Option Explicit
' 商品別シート出力（商品名で進行バー表示・間引きなし + 全シート印刷レイアウト調整込み）

Sub 商品別シート出力()
    Application.ScreenUpdating = False
    Application.Calculation = xlCalculationManual
    Application.EnableEvents = False

    CurrentMacroName = "商品別シート出力"

    Dim wb As Workbook
    Set wb = Workbooks("CB商品データ.xlsm")

    If wb.Path = "" Then
        MsgBox "このブックはまだ保存されてないよ！保存してからもう一度実行してね(；-；)", vbExclamation
        Exit Sub
    End If

    Dim dic As Object: Set dic = LoadItemDictionary()
    Dim storeDic As Object: Set storeDic = LoadStoreDictionary()

    Dim startDate As Date
    startDate = wb.Worksheets("操作").Cells(1, 2).Value

    Dim newBook As Workbook
    Set newBook = Workbooks.Add
    Dim frm As New frmProgress
    frm.Show vbModeless
    frm.ShowProgress 0, "初期化中..."
    DoEvents

    Dim panName As Variant, pan As ClsItem
    Dim count As Long, totalItems As Long
    totalItems = dic.count: count = 0

    Dim ws As Worksheet, i As Long, j As Long
    For Each panName In dic.Keys
        Set pan = dic(panName)
        If pan.Finish <> "〇" Then
            Dim safeName As String: safeName = ToSafeSheetName(panName)
            count = count + 1
            frm.ShowProgress CLng(100 * count / totalItems), "出力中：" & panName
            DoEvents

            Dim totalQty As Long: totalQty = 0
            Set ws = newBook.Sheets.Add(After:=newBook.Sheets(newBook.Sheets.count))
            On Error Resume Next: ws.name = safeName: On Error GoTo 0

            ' ヘッダー情報
            With ws
                With .Cells(1, 1)
                    .Value = panName
                    .Font.Size = 22
                    .Font.Bold = True
                End With
                With .Cells(2, 5)
                    .Value = "売価：" & pan.Price & "円"
                    .Font.Size = 20
                    .Font.Bold = True
                    .HorizontalAlignment = xlCenter
                End With
                If pan.Finder = 0 Then
                    .Cells(2, 9).Value = ""
                Else
                    With .Cells(2, 8)
                        .Value = "金探番号："
                        .Font.Size = 20
                        .Font.Bold = True
                        .HorizontalAlignment = xlRight
                    End With
                    With .Cells(2, 9)
                        .Value = pan.Finder
                        .Font.Size = 20
                        .Font.Bold = True
                        .NumberFormat = "000"
                        .HorizontalAlignment = xlLeft
                    End With
                End If
                .Cells(3, 2).Value = "店舗名"
                For i = 0 To 6
                    .Cells(3, i + 3).Value = Format(startDate + i, "m/d(aaa)")
                Next i
                .Cells(3, 8).Font.Color = RGB(37, 101, 148)
                .Cells(3, 9).Font.Color = RGB(235, 83, 59)
                With .Rows(3)
                    .RowHeight = 27
                    .Font.Bold = True
                    .Font.Size = 16
                    .HorizontalAlignment = xlCenter
                End With
            End With

            Dim rowList As Collection: Set rowList = New Collection
            Dim 店舗ws As Worksheet, 商品セル As Range
            Dim rowArr(1 To 9) As Variant, rowTemp As Variant
            Dim rowOut As Long: rowOut = 4
            Dim startIndex As Long: startIndex = wb.Worksheets("先頭").Index
            Dim endIndex As Long: endIndex = wb.Worksheets("末尾").Index

            For i = startIndex To endIndex
                Set 店舗ws = wb.Worksheets(i)
                Dim 店舗名 As String: 店舗名 = 店舗ws.name
                If 店舗名 <> "検食" And storeDic.exists(店舗名) Then
                    Set 商品セル = 店舗ws.Range("A:A").Find(panName, LookIn:=xlValues, LookAt:=xlWhole)
                    If Not 商品セル Is Nothing Then
                        For j = 1 To 9: rowArr(j) = Empty: Next j
                        rowArr(1) = storeDic(店舗名)
                        rowArr(2) = 店舗名
                        For j = 1 To 7
                            rowArr(j + 2) = 店舗ws.Cells(商品セル.row, j + 2).Value
                        Next j
                        rowList.Add rowArr
                    End If
                End If
            Next i

            Set 店舗ws = wb.Worksheets("検食")
            Set 商品セル = 店舗ws.Range("A:A").Find(panName, LookIn:=xlValues, LookAt:=xlWhole)
            If Not 商品セル Is Nothing Then
                For j = 1 To 9: rowArr(j) = Empty: Next j
                rowArr(1) = ""
                rowArr(2) = "検食"
                For j = 1 To 7
                    rowArr(j + 2) = 店舗ws.Cells(商品セル.row, j + 2).Value
                Next j
                rowList.Add rowArr
            End If

            If rowList.count > 0 Then
                Dim m As Long, n As Long
                Dim temp As Variant

                For m = 1 To rowList.count - 1
                    For n = m + 1 To rowList.count
                        If IsNumeric(rowList(m)(1)) And IsNumeric(rowList(n)(1)) Then
                            If CLng(rowList(m)(1)) > CLng(rowList(n)(1)) Then
                                temp = rowList(m)
                                rowList.Remove m
                                rowList.Add temp, , n - 1
                                temp = rowList(n)
                                rowList.Remove n
                                rowList.Add temp, , m
                            End If
                        End If
                    Next n
                Next m

                Dim rowCount As Long: rowCount = rowList.count
                Dim outputData() As Variant
                ReDim outputData(1 To rowCount, 1 To 9)
                Dim tempArr As Variant
                For i = 1 To rowCount
                    tempArr = rowList(i)
                    For j = 1 To 9
                        outputData(i, j) = tempArr(j)
                    Next j
                Next i
                ws.Range("A4").Resize(rowCount, 9).Value = outputData

                Dim lastRow As Long: lastRow = rowCount + 3
                For i = 3 To 9
                    ws.Cells(lastRow + 1, i).Value = WorksheetFunction.Sum(ws.Range(ws.Cells(4, i), ws.Cells(lastRow, i)))
                    totalQty = totalQty + ws.Cells(lastRow + 1, i).Value
                Next i

                If totalQty = 0 Then
                    Application.DisplayAlerts = False
                    ws.Delete
                    Application.DisplayAlerts = True
                    GoTo SkipLayout
                End If

                With ws
                    With .Range("A4:A" & lastRow)
                        .NumberFormat = "000"
                        .Font.Size = 14
                        .Font.Bold = True
                    End With
                    With .Range("B4:B" & lastRow)
                        .Font.Size = 14
                        .Font.Bold = True
                    End With
                    For i = 4 To lastRow
                        If (.Cells(i, 3).Value + .Cells(i, 4).Value + .Cells(i, 5).Value + .Cells(i, 6).Value + .Cells(i, 7).Value + .Cells(i, 8).Value + .Cells(i, 9).Value) = 0 Then
                            .Range("B" & i & ":I" & i).Font.Strikethrough = True
                            .Range("B" & i & ":I" & i).Interior.Color = RGB(200, 200, 200)
                        End If
                    Next i
                    With .Range("A1:I1")
                        .HorizontalAlignment = xlCenterAcrossSelection
                        .Interior.Color = RGB(251, 219, 215)
                    End With
                    .Range("B4:I" & lastRow).Borders.LineStyle = xlContinuous
                    With .Range("C4:I" & lastRow)
                        .Font.Size = 16
                        .Font.Bold = True
                        .HorizontalAlignment = xlCenter
                    End With
                    With .Range("C" & lastRow + 1, "I" & lastRow + 1)
                        .Font.Size = 16
                        .Font.Bold = True
                        .Font.Color = RGB(235, 83, 59)
                        .HorizontalAlignment = xlCenter
                    End With
                    .Columns("A").ColumnWidth = 5
                    .Columns("B").ColumnWidth = 17
                    .Columns("C:I").ColumnWidth = 12
                    .Rows("4:" & lastRow).RowHeight = 30
                End With
            End If
        End If
SkipLayout:
    Next panName

    If newBook.Sheets.count > 1 Then
        On Error Resume Next
        Application.DisplayAlerts = False
        newBook.Worksheets("Sheet1").Delete
        Application.DisplayAlerts = True
        On Error GoTo 0
    End If

    frm.ShowProgress 100, "全シート印刷レイアウト中..."
    DoEvents

    Dim wsLayout As Worksheet, totalWs As Long, layoutCount As Long
    totalWs = newBook.Worksheets.count
    layoutCount = 0

    For Each wsLayout In newBook.Worksheets
        layoutCount = layoutCount + 1
        frm.ShowProgress CLng(100 * layoutCount / totalWs), "印刷レイアウト調整中：" & wsLayout.name
        DoEvents

        With wsLayout.PageSetup
            .Orientation = xlPortrait
            .PaperSize = xlPaperA4
            .Zoom = False
            .FitToPagesWide = 1
            .FitToPagesTall = 1
            .CenterHorizontally = True
            .CenterVertically = False
            .TopMargin = Application.CentimetersToPoints(0.1)
            .BottomMargin = Application.CentimetersToPoints(0.1)
            .LeftMargin = Application.CentimetersToPoints(0.1)
            .RightMargin = Application.CentimetersToPoints(0.1)
            .HeaderMargin = Application.CentimetersToPoints(0.1)
            .FooterMargin = Application.CentimetersToPoints(0.1)
        End With
    Next wsLayout

    frm.ShowProgress 100, "保存中..."
    DoEvents

    Dim folderPath As String
    folderPath = wb.Path & "\商品ごとの表"
    Dim safeFileName As String
    safeFileName = ToSafeFileName("商品別_" & Format(Date, "yyyymmdd") & ".xlsx")
    Dim savePath As String
    savePath = folderPath & "\" & safeFileName

    newBook.SaveAs Filename:=savePath
    newBook.Activate

    Unload frm
    Application.EnableEvents = True
    Application.Calculation = xlCalculationAutomatic
    Application.ScreenUpdating = True
End Sub
Sub クリエイト商品別シート出力()
    Application.ScreenUpdating = False
    Application.Calculation = xlCalculationManual
    Application.EnableEvents = False

    CurrentMacroName = "クリエイト商品別シート出力"

    Dim wb As Workbook
    Set wb = Workbooks("CB商品データ.xlsm")

    If wb.Path = "" Then
        MsgBox "このブックはまだ保存されてないよ！保存してからもう一度実行してね(；-；)", vbExclamation
        Exit Sub
    End If

    Dim dic As Object: Set dic = LoadItemDictionary()
    Dim storeDic As Object: Set storeDic = LoadCreateStoreDictionary()

    Dim startDate As Date
    startDate = wb.Worksheets("操作").Cells(1, 2).Value

    Dim newBook As Workbook
    Set newBook = Workbooks.Add

    Dim frm As New frmProgress
    frm.Show vbModeless
    frm.ShowProgress 0, "初期化中..."
    DoEvents

    Dim panName As Variant, pan As ClsItem
    Dim count As Long, totalItems As Long
    totalItems = dic.count: count = 0

    Dim ws As Worksheet, i As Long, j As Long
    For Each panName In dic.Keys
        Set pan = dic(panName)
        If pan.Finish <> "〇" Then
            Dim safeName As String: safeName = ToSafeSheetName(panName)
            count = count + 1
            frm.ShowProgress CLng(100 * count / totalItems), "出力中：" & panName
            DoEvents

            Dim totalQty As Long: totalQty = 0
            Set ws = newBook.Sheets.Add(After:=newBook.Sheets(newBook.Sheets.count))
            On Error Resume Next: ws.name = safeName: On Error GoTo 0

            With ws
                .Cells(1, 1).Value = panName
                .Cells(1, 1).Font.Size = 22
                .Cells(1, 1).Font.Bold = True

                .Cells(2, 5).Value = "売価：" & pan.Price2 & "円"
                .Cells(2, 5).Font.Size = 20
                .Cells(2, 5).Font.Bold = True
                .Cells(2, 5).HorizontalAlignment = xlCenter

                If pan.Finder = 0 Then
                    .Cells(2, 9).Value = ""
                Else
                    .Cells(2, 8).Value = "金探番号："
                    .Cells(2, 8).Font.Size = 20
                    .Cells(2, 8).Font.Bold = True
                    .Cells(2, 8).HorizontalAlignment = xlRight

                    .Cells(2, 9).Value = pan.Finder
                    .Cells(2, 9).Font.Size = 20
                    .Cells(2, 9).Font.Bold = True
                    .Cells(2, 9).NumberFormat = "000"
                    .Cells(2, 9).HorizontalAlignment = xlLeft
                End If

                .Cells(3, 2).Value = "店舗名"
                For i = 0 To 6
                    .Cells(3, i + 3).Value = Format(startDate + i, "m/d(aaa)")
                Next i
                .Cells(3, 8).Font.Color = RGB(37, 101, 148)
                .Cells(3, 9).Font.Color = RGB(235, 83, 59)

                With .Rows(3)
                    .RowHeight = 27
                    .Font.Bold = True
                    .Font.Size = 16
                    .HorizontalAlignment = xlCenter
                End With
            End With

            Dim rowOut As Long: rowOut = 4
            Dim 店舗ws As Worksheet, 商品セル As Range
            Dim startIndex As Long: startIndex = wb.Worksheets("クリエ先頭").Index
            Dim endIndex As Long: endIndex = wb.Worksheets("クリエ末尾").Index
            Dim rowList As Collection: Set rowList = New Collection
            Dim rowArr(1 To 9) As Variant

            For i = startIndex To endIndex
                Set 店舗ws = wb.Worksheets(i)
                Dim 店舗名 As String: 店舗名 = 店舗ws.name
                If 店舗名 <> "検食" And storeDic.exists(店舗名) Then
                    Set 商品セル = 店舗ws.Range("A:A").Find(panName, LookIn:=xlValues, LookAt:=xlWhole)
                    If Not 商品セル Is Nothing Then
                        For j = 1 To 9: rowArr(j) = Empty: Next j
                        rowArr(1) = storeDic(店舗名)
                        rowArr(2) = 店舗名
                        For j = 1 To 7
                            rowArr(j + 2) = 店舗ws.Cells(商品セル.row, j + 2).Value
                        Next j
                        rowList.Add rowArr
                    End If
                End If
            Next i

            ' ?? ここで rowList を店舗番号（rowArr(1)）で昇順に並べ替え
            Dim m As Long, n As Long
            Dim temp As Variant
            For m = 1 To rowList.count - 1
                For n = m + 1 To rowList.count
                    If IsNumeric(rowList(m)(1)) And IsNumeric(rowList(n)(1)) Then
                        If CLng(rowList(m)(1)) > CLng(rowList(n)(1)) Then
                            temp = rowList(m)
                            rowList.Remove m
                            rowList.Add temp, , n - 1
                            temp = rowList(n)
                            rowList.Remove n
                            rowList.Add temp, , m
                        End If
                    End If
                Next n
            Next m

            ' ?? 並べ替え後に出力！
            rowOut = 4
            For i = 1 To rowList.count
                temp = rowList(i)
                For j = 1 To 9
                    ws.Cells(rowOut, j).Value = temp(j)
                    If j >= 3 And temp(j) = 0 Then
                        With ws.Cells(rowOut, j)
                            .Interior.Color = RGB(200, 200, 200)
                            .Font.Strikethrough = True
                        End With
                    End If
                Next j
                rowOut = rowOut + 1
            Next i

            Dim lastRow As Long: lastRow = rowOut - 1
            For i = 3 To 9
                ws.Cells(lastRow + 1, i).Value = Application.Sum(ws.Range(ws.Cells(4, i), ws.Cells(lastRow, i)))
                totalQty = totalQty + ws.Cells(lastRow + 1, i).Value
            Next i

            If totalQty = 0 Then
                Application.DisplayAlerts = False
                ws.Delete
                Application.DisplayAlerts = True
                GoTo SkipLayout
            End If

            With ws
                .Range("A4:A" & lastRow).NumberFormat = "000"
                .Range("A4:A" & lastRow).Font.Size = 14
                .Range("A4:A" & lastRow).Font.Bold = True

                .Range("B4:B" & lastRow).Font.Size = 14
                .Range("B4:B" & lastRow).Font.Bold = True

                For i = 4 To lastRow
                    If Application.Sum(.Range(.Cells(i, 3), .Cells(i, 9))) = 0 Then
                        .Range("B" & i & ":I" & i).Font.Strikethrough = True
                        .Range("B" & i & ":I" & i).Interior.Color = RGB(200, 200, 200)
                    End If
                Next i

                .Range("A1:I1").HorizontalAlignment = xlCenterAcrossSelection
                .Range("A1:I1").Interior.Color = RGB(224, 215, 242)
                .Range("B4:I" & lastRow).Borders.LineStyle = xlContinuous
                .Range("C4:I" & lastRow).Font.Size = 16
                .Range("C4:I" & lastRow).Font.Bold = True
                .Range("C4:I" & lastRow).HorizontalAlignment = xlCenter

                .Range("C" & lastRow + 1, "I" & lastRow + 1).Font.Size = 16
                .Range("C" & lastRow + 1, "I" & lastRow + 1).Font.Bold = True
                .Range("C" & lastRow + 1, "I" & lastRow + 1).Font.Color = RGB(235, 83, 59)
                .Range("C" & lastRow + 1, "I" & lastRow + 1).HorizontalAlignment = xlCenter

                .Columns("A").ColumnWidth = 5
                .Columns("B").ColumnWidth = 17
                .Columns("C:I").ColumnWidth = 12
                .Rows("4:" & lastRow).RowHeight = 30
            End With
        End If
SkipLayout:
    Next panName

    If newBook.Sheets.count > 1 Then
        On Error Resume Next
        Application.DisplayAlerts = False
        newBook.Worksheets("Sheet1").Delete
        Application.DisplayAlerts = True
        On Error GoTo 0
    End If

    ' 印刷レイアウト
    Dim wsLayout As Worksheet, totalWs As Long, layoutCount As Long
    totalWs = newBook.Worksheets.count
    layoutCount = 0

    For Each wsLayout In newBook.Worksheets
        layoutCount = layoutCount + 1
        frm.ShowProgress CLng(100 * layoutCount / totalWs), "印刷レイアウト調整中：" & wsLayout.name
        DoEvents

        With wsLayout.PageSetup
            .Orientation = xlLandscape
            .PaperSize = xlPaperA4
            .Zoom = False
            .FitToPagesWide = 1
            .FitToPagesTall = 1
            .CenterHorizontally = True
            .CenterVertically = False
            .TopMargin = Application.CentimetersToPoints(0.1)
            .BottomMargin = Application.CentimetersToPoints(0.1)
            .LeftMargin = Application.CentimetersToPoints(0.1)
            .RightMargin = Application.CentimetersToPoints(0.1)
            .HeaderMargin = Application.CentimetersToPoints(0.1)
            .FooterMargin = Application.CentimetersToPoints(0.1)
        End With
    Next wsLayout

    frm.ShowProgress 100, "保存中..."
    DoEvents

    Dim folderPath As String
    folderPath = wb.Path & "\商品ごとの表"
    Dim safeFileName As String
    safeFileName = ToSafeFileName("クリエ商品別_" & Format(Date, "yyyymmdd") & ".xlsx")
    Dim savePath As String
    savePath = folderPath & "\" & safeFileName

    newBook.SaveAs Filename:=savePath
    newBook.Activate

    Unload frm
    Application.EnableEvents = True
    Application.Calculation = xlCalculationAutomatic
    Application.ScreenUpdating = True
End Sub

```

```vb
Option Explicit
' 商品別シート出力（商品名で進行バー表示・間引きなし + 全シート印刷レイアウト調整込み）

Sub 商品別シート出力()
    Application.ScreenUpdating = False
    Application.Calculation = xlCalculationManual
    Application.EnableEvents = False

    CurrentMacroName = "商品別シート出力"

    Dim wb As Workbook
    Set wb = Workbooks("CB商品データ.xlsm")

    If wb.Path = "" Then
        MsgBox "このブックはまだ保存されてないよ！保存してからもう一度実行してね(；-；)", vbExclamation
        Exit Sub
    End If

    Dim dic As Object: Set dic = LoadItemDictionary()
    Dim storeDic As Object: Set storeDic = LoadStoreDictionary()

    Dim startDate As Date
    startDate = wb.Worksheets("操作").Cells(1, 2).Value

    Dim newBook As Workbook
    Set newBook = Workbooks.Add
    Dim frm As New frmProgress
    frm.Show vbModeless
    frm.ShowProgress 0, "初期化中..."
    DoEvents

    Dim panName As Variant, pan As ClsItem
    Dim count As Long, totalItems As Long
    totalItems = dic.count: count = 0

    Dim ws As Worksheet, i As Long, j As Long
    For Each panName In dic.Keys
        Set pan = dic(panName)
        If pan.Finish <> "〇" Then
            Dim safeName As String: safeName = ToSafeSheetName(panName)
            count = count + 1
            frm.ShowProgress CLng(100 * count / totalItems), "出力中：" & panName
            DoEvents

            Dim totalQty As Long: totalQty = 0
            Set ws = newBook.Sheets.Add(After:=newBook.Sheets(newBook.Sheets.count))
            On Error Resume Next: ws.name = safeName: On Error GoTo 0

            ' ヘッダー情報
            With ws
                With .Cells(1, 1)
                    .Value = panName
                    .Font.Size = 22
                    .Font.Bold = True
                End With
                With .Cells(2, 5)
                    .Value = "売価：" & pan.Price & "円"
                    .Font.Size = 20
                    .Font.Bold = True
                    .HorizontalAlignment = xlCenter
                End With
                If pan.Finder = 0 Then
                    .Cells(2, 9).Value = ""
                Else
                    With .Cells(2, 8)
                        .Value = "金探番号："
                        .Font.Size = 20
                        .Font.Bold = True
                        .HorizontalAlignment = xlRight
                    End With
                    With .Cells(2, 9)
                        .Value = pan.Finder
                        .Font.Size = 20
                        .Font.Bold = True
                        .NumberFormat = "000"
                        .HorizontalAlignment = xlLeft
                    End With
                End If
                .Cells(3, 2).Value = "店舗名"
                For i = 0 To 6
                    .Cells(3, i + 3).Value = Format(startDate + i, "m/d(aaa)")
                Next i
                .Cells(3, 8).Font.Color = RGB(37, 101, 148)
                .Cells(3, 9).Font.Color = RGB(235, 83, 59)
                With .Rows(3)
                    .RowHeight = 27
                    .Font.Bold = True
                    .Font.Size = 16
                    .HorizontalAlignment = xlCenter
                End With
            End With

            Dim rowList As Collection: Set rowList = New Collection
            Dim 店舗ws As Worksheet, 商品セル As Range
            Dim rowArr(1 To 9) As Variant, rowTemp As Variant
            Dim rowOut As Long: rowOut = 4
            Dim startIndex As Long: startIndex = wb.Worksheets("先頭").Index
            Dim endIndex As Long: endIndex = wb.Worksheets("末尾").Index

            For i = startIndex To endIndex
                Set 店舗ws = wb.Worksheets(i)
                Dim 店舗名 As String: 店舗名 = 店舗ws.name
                If 店舗名 <> "検食" And storeDic.exists(店舗名) Then
                    Set 商品セル = 店舗ws.Range("A:A").Find(panName, LookIn:=xlValues, LookAt:=xlWhole)
                    If Not 商品セル Is Nothing Then
                        For j = 1 To 9: rowArr(j) = Empty: Next j
                        rowArr(1) = storeDic(店舗名)
                        rowArr(2) = 店舗名
                        For j = 1 To 7
                            rowArr(j + 2) = 店舗ws.Cells(商品セル.row, j + 2).Value
                        Next j
                        rowList.Add rowArr
                    End If
                End If
            Next i

            Set 店舗ws = wb.Worksheets("検食")
            Set 商品セル = 店舗ws.Range("A:A").Find(panName, LookIn:=xlValues, LookAt:=xlWhole)
            If Not 商品セル Is Nothing Then
                For j = 1 To 9: rowArr(j) = Empty: Next j
                rowArr(1) = ""
                rowArr(2) = "検食"
                For j = 1 To 7
                    rowArr(j + 2) = 店舗ws.Cells(商品セル.row, j + 2).Value
                Next j
                rowList.Add rowArr
            End If

            If rowList.count > 0 Then
                Dim m As Long, n As Long
                Dim temp As Variant

                For m = 1 To rowList.count - 1
                    For n = m + 1 To rowList.count
                        If IsNumeric(rowList(m)(1)) And IsNumeric(rowList(n)(1)) Then
                            If CLng(rowList(m)(1)) > CLng(rowList(n)(1)) Then
                                temp = rowList(m)
                                rowList.Remove m
                                rowList.Add temp, , n - 1
                                temp = rowList(n)
                                rowList.Remove n
                                rowList.Add temp, , m
                            End If
                        End If
                    Next n
                Next m

                Dim rowCount As Long: rowCount = rowList.count
                Dim outputData() As Variant
                ReDim outputData(1 To rowCount, 1 To 9)
                Dim tempArr As Variant
                For i = 1 To rowCount
                    tempArr = rowList(i)
                    For j = 1 To 9
                        outputData(i, j) = tempArr(j)
                    Next j
                Next i
                ws.Range("A4").Resize(rowCount, 9).Value = outputData

                Dim lastRow As Long: lastRow = rowCount + 3
                For i = 3 To 9
                    ws.Cells(lastRow + 1, i).Value = WorksheetFunction.Sum(ws.Range(ws.Cells(4, i), ws.Cells(lastRow, i)))
                    totalQty = totalQty + ws.Cells(lastRow + 1, i).Value
                Next i

                If totalQty = 0 Then
                    Application.DisplayAlerts = False
                    ws.Delete
                    Application.DisplayAlerts = True
                    GoTo SkipLayout
                End If

                With ws
                    With .Range("A4:A" & lastRow)
                        .NumberFormat = "000"
                        .Font.Size = 14
                        .Font.Bold = True
                    End With
                    With .Range("B4:B" & lastRow)
                        .Font.Size = 14
                        .Font.Bold = True
                    End With
                    For i = 4 To lastRow
                        If (.Cells(i, 3).Value + .Cells(i, 4).Value + .Cells(i, 5).Value + .Cells(i, 6).Value + .Cells(i, 7).Value + .Cells(i, 8).Value + .Cells(i, 9).Value) = 0 Then
                            .Range("B" & i & ":I" & i).Font.Strikethrough = True
                            .Range("B" & i & ":I" & i).Interior.Color = RGB(200, 200, 200)
                        End If
                    Next i
                    With .Range("A1:I1")
                        .HorizontalAlignment = xlCenterAcrossSelection
                        .Interior.Color = RGB(251, 219, 215)
                    End With
                    .Range("B4:I" & lastRow).Borders.LineStyle = xlContinuous
                    With .Range("C4:I" & lastRow)
                        .Font.Size = 16
                        .Font.Bold = True
                        .HorizontalAlignment = xlCenter
                    End With
                    With .Range("C" & lastRow + 1, "I" & lastRow + 1)
                        .Font.Size = 16
                        .Font.Bold = True
                        .Font.Color = RGB(235, 83, 59)
                        .HorizontalAlignment = xlCenter
                    End With
                    .Columns("A").ColumnWidth = 5
                    .Columns("B").ColumnWidth = 17
                    .Columns("C:I").ColumnWidth = 12
                    .Rows("4:" & lastRow).RowHeight = 30
                End With
            End If
        End If
SkipLayout:
    Next panName

    If newBook.Sheets.count > 1 Then
        On Error Resume Next
        Application.DisplayAlerts = False
        newBook.Worksheets("Sheet1").Delete
        Application.DisplayAlerts = True
        On Error GoTo 0
    End If

    frm.ShowProgress 100, "全シート印刷レイアウト中..."
    DoEvents

    Dim wsLayout As Worksheet, totalWs As Long, layoutCount As Long
    totalWs = newBook.Worksheets.count
    layoutCount = 0

    For Each wsLayout In newBook.Worksheets
        layoutCount = layoutCount + 1
        frm.ShowProgress CLng(100 * layoutCount / totalWs), "印刷レイアウト調整中：" & wsLayout.name
        DoEvents

        With wsLayout.PageSetup
            .Orientation = xlPortrait
            .PaperSize = xlPaperA4
            .Zoom = False
            .FitToPagesWide = 1
            .FitToPagesTall = 1
            .CenterHorizontally = True
            .CenterVertically = False
            .TopMargin = Application.CentimetersToPoints(0.1)
            .BottomMargin = Application.CentimetersToPoints(0.1)
            .LeftMargin = Application.CentimetersToPoints(0.1)
            .RightMargin = Application.CentimetersToPoints(0.1)
            .HeaderMargin = Application.CentimetersToPoints(0.1)
            .FooterMargin = Application.CentimetersToPoints(0.1)
        End With
    Next wsLayout

    frm.ShowProgress 100, "保存中..."
    DoEvents

    Dim folderPath As String
    folderPath = wb.Path & "\商品ごとの表"
    Dim safeFileName As String
    safeFileName = ToSafeFileName("商品別_" & Format(Date, "yyyymmdd") & ".xlsx")
    Dim savePath As String
    savePath = folderPath & "\" & safeFileName

    newBook.SaveAs Filename:=savePath
    newBook.Activate

    Unload frm
    Application.EnableEvents = True
    Application.Calculation = xlCalculationAutomatic
    Application.ScreenUpdating = True
End Sub
Sub クリエイト商品別シート出力()
    Application.ScreenUpdating = False
    Application.Calculation = xlCalculationManual
    Application.EnableEvents = False

    CurrentMacroName = "クリエイト商品別シート出力"

    Dim wb As Workbook
    Set wb = Workbooks("CB商品データ.xlsm")

    If wb.Path = "" Then
        MsgBox "このブックはまだ保存されてないよ！保存してからもう一度実行してね(；-；)", vbExclamation
        Exit Sub
    End If

    Dim dic As Object: Set dic = LoadItemDictionary()
    Dim storeDic As Object: Set storeDic = LoadCreateStoreDictionary()

    Dim startDate As Date
    startDate = wb.Worksheets("操作").Cells(1, 2).Value

    Dim newBook As Workbook
    Set newBook = Workbooks.Add

    Dim frm As New frmProgress
    frm.Show vbModeless
    frm.ShowProgress 0, "初期化中..."
    DoEvents

    Dim panName As Variant, pan As ClsItem
    Dim count As Long, totalItems As Long
    totalItems = dic.count: count = 0

    Dim ws As Worksheet, i As Long, j As Long
    For Each panName In dic.Keys
        Set pan = dic(panName)
        If pan.Finish <> "〇" Then
            Dim safeName As String: safeName = ToSafeSheetName(panName)
            count = count + 1
            frm.ShowProgress CLng(100 * count / totalItems), "出力中：" & panName
            DoEvents

            Dim totalQty As Long: totalQty = 0
            Set ws = newBook.Sheets.Add(After:=newBook.Sheets(newBook.Sheets.count))
            On Error Resume Next: ws.name = safeName: On Error GoTo 0

            With ws
                .Cells(1, 1).Value = panName
                .Cells(1, 1).Font.Size = 22
                .Cells(1, 1).Font.Bold = True

                .Cells(2, 5).Value = "売価：" & pan.Price2 & "円"
                .Cells(2, 5).Font.Size = 20
                .Cells(2, 5).Font.Bold = True
                .Cells(2, 5).HorizontalAlignment = xlCenter

                If pan.Finder = 0 Then
                    .Cells(2, 9).Value = ""
                Else
                    .Cells(2, 8).Value = "金探番号："
                    .Cells(2, 8).Font.Size = 20
                    .Cells(2, 8).Font.Bold = True
                    .Cells(2, 8).HorizontalAlignment = xlRight

                    .Cells(2, 9).Value = pan.Finder
                    .Cells(2, 9).Font.Size = 20
                    .Cells(2, 9).Font.Bold = True
                    .Cells(2, 9).NumberFormat = "000"
                    .Cells(2, 9).HorizontalAlignment = xlLeft
                End If

                .Cells(3, 2).Value = "店舗名"
                For i = 0 To 6
                    .Cells(3, i + 3).Value = Format(startDate + i, "m/d(aaa)")
                Next i
                .Cells(3, 8).Font.Color = RGB(37, 101, 148)
                .Cells(3, 9).Font.Color = RGB(235, 83, 59)

                With .Rows(3)
                    .RowHeight = 27
                    .Font.Bold = True
                    .Font.Size = 16
                    .HorizontalAlignment = xlCenter
                End With
            End With

            Dim rowOut As Long: rowOut = 4
            Dim 店舗ws As Worksheet, 商品セル As Range
            Dim startIndex As Long: startIndex = wb.Worksheets("クリエ先頭").Index
            Dim endIndex As Long: endIndex = wb.Worksheets("クリエ末尾").Index
            Dim rowList As Collection: Set rowList = New Collection
            Dim rowArr(1 To 9) As Variant

            For i = startIndex To endIndex
                Set 店舗ws = wb.Worksheets(i)
                Dim 店舗名 As String: 店舗名 = 店舗ws.name
                If 店舗名 <> "検食" And storeDic.exists(店舗名) Then
                    Set 商品セル = 店舗ws.Range("A:A").Find(panName, LookIn:=xlValues, LookAt:=xlWhole)
                    If Not 商品セル Is Nothing Then
                        For j = 1 To 9: rowArr(j) = Empty: Next j
                        rowArr(1) = storeDic(店舗名)
                        rowArr(2) = 店舗名
                        For j = 1 To 7
                            rowArr(j + 2) = 店舗ws.Cells(商品セル.row, j + 2).Value
                        Next j
                        rowList.Add rowArr
                    End If
                End If
            Next i

            ' ?? ここで rowList を店舗番号（rowArr(1)）で昇順に並べ替え
            Dim m As Long, n As Long
            Dim temp As Variant
            For m = 1 To rowList.count - 1
                For n = m + 1 To rowList.count
                    If IsNumeric(rowList(m)(1)) And IsNumeric(rowList(n)(1)) Then
                        If CLng(rowList(m)(1)) > CLng(rowList(n)(1)) Then
                            temp = rowList(m)
                            rowList.Remove m
                            rowList.Add temp, , n - 1
                            temp = rowList(n)
                            rowList.Remove n
                            rowList.Add temp, , m
                        End If
                    End If
                Next n
            Next m

            ' ?? 並べ替え後に出力！
            rowOut = 4
            For i = 1 To rowList.count
                temp = rowList(i)
                For j = 1 To 9
                    ws.Cells(rowOut, j).Value = temp(j)
                    If j >= 3 And temp(j) = 0 Then
                        With ws.Cells(rowOut, j)
                            .Interior.Color = RGB(200, 200, 200)
                            .Font.Strikethrough = True
                        End With
                    End If
                Next j
                rowOut = rowOut + 1
            Next i

            Dim lastRow As Long: lastRow = rowOut - 1
            For i = 3 To 9
                ws.Cells(lastRow + 1, i).Value = Application.Sum(ws.Range(ws.Cells(4, i), ws.Cells(lastRow, i)))
                totalQty = totalQty + ws.Cells(lastRow + 1, i).Value
            Next i

            If totalQty = 0 Then
                Application.DisplayAlerts = False
                ws.Delete
                Application.DisplayAlerts = True
                GoTo SkipLayout
            End If

            With ws
                .Range("A4:A" & lastRow).NumberFormat = "000"
                .Range("A4:A" & lastRow).Font.Size = 14
                .Range("A4:A" & lastRow).Font.Bold = True

                .Range("B4:B" & lastRow).Font.Size = 14
                .Range("B4:B" & lastRow).Font.Bold = True

                For i = 4 To lastRow
                    If Application.Sum(.Range(.Cells(i, 3), .Cells(i, 9))) = 0 Then
                        .Range("B" & i & ":I" & i).Font.Strikethrough = True
                        .Range("B" & i & ":I" & i).Interior.Color = RGB(200, 200, 200)
                    End If
                Next i

                .Range("A1:I1").HorizontalAlignment = xlCenterAcrossSelection
                .Range("A1:I1").Interior.Color = RGB(224, 215, 242)
                .Range("B4:I" & lastRow).Borders.LineStyle = xlContinuous
                .Range("C4:I" & lastRow).Font.Size = 16
                .Range("C4:I" & lastRow).Font.Bold = True
                .Range("C4:I" & lastRow).HorizontalAlignment = xlCenter

                .Range("C" & lastRow + 1, "I" & lastRow + 1).Font.Size = 16
                .Range("C" & lastRow + 1, "I" & lastRow + 1).Font.Bold = True
                .Range("C" & lastRow + 1, "I" & lastRow + 1).Font.Color = RGB(235, 83, 59)
                .Range("C" & lastRow + 1, "I" & lastRow + 1).HorizontalAlignment = xlCenter

                .Columns("A").ColumnWidth = 5
                .Columns("B").ColumnWidth = 17
                .Columns("C:I").ColumnWidth = 12
                .Rows("4:" & lastRow).RowHeight = 30
            End With
        End If
SkipLayout:
    Next panName

    If newBook.Sheets.count > 1 Then
        On Error Resume Next
        Application.DisplayAlerts = False
        newBook.Worksheets("Sheet1").Delete
        Application.DisplayAlerts = True
        On Error GoTo 0
    End If

    ' 印刷レイアウト
    Dim wsLayout As Worksheet, totalWs As Long, layoutCount As Long
    totalWs = newBook.Worksheets.count
    layoutCount = 0

    For Each wsLayout In newBook.Worksheets
        layoutCount = layoutCount + 1
        frm.ShowProgress CLng(100 * layoutCount / totalWs), "印刷レイアウト調整中：" & wsLayout.name
        DoEvents

        With wsLayout.PageSetup
            .Orientation = xlLandscape
            .PaperSize = xlPaperA4
            .Zoom = False
            .FitToPagesWide = 1
            .FitToPagesTall = 1
            .CenterHorizontally = True
            .CenterVertically = False
            .TopMargin = Application.CentimetersToPoints(0.1)
            .BottomMargin = Application.CentimetersToPoints(0.1)
            .LeftMargin = Application.CentimetersToPoints(0.1)
            .RightMargin = Application.CentimetersToPoints(0.1)
            .HeaderMargin = Application.CentimetersToPoints(0.1)
            .FooterMargin = Application.CentimetersToPoints(0.1)
        End With
    Next wsLayout

    frm.ShowProgress 100, "保存中..."
    DoEvents

    Dim folderPath As String
    folderPath = wb.Path & "\商品ごとの表"
    Dim safeFileName As String
    safeFileName = ToSafeFileName("クリエ商品別_" & Format(Date, "yyyymmdd") & ".xlsx")
    Dim savePath As String
    savePath = folderPath & "\" & safeFileName

    newBook.SaveAs Filename:=savePath
    newBook.Activate

    Unload frm
    Application.EnableEvents = True
    Application.Calculation = xlCalculationAutomatic
    Application.ScreenUpdating = True
End Sub

```

```vb
Option Explicit

Sub 冷凍生地出し表出力()
    Application.ScreenUpdating = False
    Application.Calculation = xlCalculationManual
    Application.EnableEvents = False

    Dim frm As New frmProgress
    CurrentMacroName = "冷凍生地出し表出力"
    frm.Show vbModeless
    frm.ShowProgress 0, "初期化中..."
    DoEvents

    Dim dic As Object, ws製造 As Worksheet, ws出力 As Worksheet
    Set dic = LoadItemDictionary()
    Set ws製造 = Worksheets("製造数")
    Set ws出力 = Worksheets("冷凍生地出し")

    ' ▼▼ 出力シートの初期化（ここはそのまま） ▼▼
    With ws出力
        .Cells.Clear
        .Cells(1, 1).Value = "冷凍生地出し"
        .Cells(2, 1).Value = "日付"
        Dim sDay As Date, d As Long
        sDay = Worksheets("操作").Cells(1, 2).Value
        For d = 2 To 8
            .Cells(2, d).Value = sDay
            sDay = sDay + 1
        Next d
        .Range("A3:I3").Value = Array("商品名", "月", "火", "水", "木", "金", "土", "日", "生地名")
    End With

    frm.ShowProgress 100, "初期化完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    frm.ShowProgress 0, "集計・書き込み中..."
    DoEvents

    ' ▼▼ 変数宣言もスクラッチ版に合わせたよ！ ▼▼
    Dim i As Long, j As Long, lastRow As Long, total As Long, count As Long
    Dim panName As String
    Dim 製造数 As Variant, 出す数 As Double
    Dim 納品日 As Date, 生地出し日 As Date
    Dim 日付列 As Variant
    Dim pan As ClsItem
    ' これが魔法の箱！
    Dim dataMap As Object: Set dataMap = CreateObject("Scripting.Dictionary")

    lastRow = ws製造.Cells(Rows.count, 1).End(xlUp).row
    total = lastRow - 4
    日付列 = ws出力.Range("B2:H2").Value

    ' ▼▼ メイン処理スタート！ ▼▼
    For i = 5 To lastRow
        panName = ws製造.Cells(i, 1).Value
        frm.ShowProgress CLng(100 * (i - 4) / total), "集計・書き込み中：" & vbCrLf & panName
        DoEvents

        If dic.exists(panName) Then
            Set pan = dic(panName)
            ' 冷凍対象のものだけ処理
            If pan.Frozen = "〇" Then

                ' ★ここがポイント！まだ登録されてないパンなら、
                ' 「名前」と「0」と「生地名」が入ったセットを作っちゃう！
                If Not dataMap.exists(panName) Then
                    dataMap(panName) = Array(pan.ItemName, 0, 0, 0, 0, 0, 0, 0, pan.Dough)
                End If

                ' いったん箱からデータを取り出す
                Dim arr As Variant: arr = dataMap(panName)

                For d = 3 To 16
                    納品日 = ws製造.Cells(3, d).Value
                    製造数 = ws製造.Cells(i, d).Value

                    If Not IsEmpty(製造数) And IsNumeric(製造数) And val(製造数) > 0 Then
                        出す数 = pan.OutputQty(製造数)
                        生地出し日 = 納品日 - pan.FrozenDaysBefore

                        For j = 1 To 7
                            If 日付列(1, j) = 生地出し日 Then
                                ' ★ここで足し算！
                                ' NzNum関数がもし無い環境なら Val(arr(j)) に変えてもOKだよ
                                ' (スクラッチの方で使えてるならそのままでOK！)
                                arr(j) = arr(j) + 出す数
                                Exit For
                            End If
                        Next j
                    End If
                Next d

                ' 計算終わったら箱に戻す
                dataMap(panName) = arr
            End If
        End If
    Next i

    ' ▼▼ 最後にまとめて書き出し！（ここもスクラッチ版と同じ書き方） ▼▼
    If dataMap.count > 0 Then
        Dim outputArray() As Variant
        ReDim outputArray(1 To dataMap.count, 1 To 9)
        Dim k As Variant
        count = 0
        For Each k In dataMap.Keys
            count = count + 1
            Dim rowArr As Variant: rowArr = dataMap(k)
            For j = 1 To 9
                ' Arrayは0始まりだから j-1 するのがミソ！
                outputArray(count, j) = rowArr(j - 1)
            Next j
        Next k
        ws出力.Range("A4").Resize(dataMap.count, 9).Value = outputArray
    End If

    frm.ShowProgress 100, "書き込み完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

'//////////////////////////////////////////////////////////////////////////////////
'                            レイアウト（ここは元のまま）
'//////////////////////////////////////////////////////////////////////////////////

    frm.ShowProgress 0, "レイアウト整形中..."
    DoEvents

    frm.ShowProgress 10, "レイアウト整形中：書式設定中..."
    DoEvents

    lastRow = ws出力.Cells(Rows.count, 1).End(xlUp).row
    With ws出力
        .Cells.Font.Bold = True
        With .Range("A1:I1")
            .HorizontalAlignment = xlCenterAcrossSelection
            .Font.Size = 16
        End With

        frm.ShowProgress 20, "レイアウト整形中：書式設定中..."
        DoEvents

        .Range("A2:I3").Font.Size = 14
        .Range("A2:H2").Borders.LineStyle = xlContinuous
        .Range("A2:I3").HorizontalAlignment = xlCenter
        .Range("B2:H2").NumberFormat = "m/d"
        With .Range("A3:I3")
            .Borders.LineStyle = xlContinuous
            .Borders(xlEdgeBottom).LineStyle = xlDouble
        End With

        frm.ShowProgress 30, "レイアウト整形中：書式設定中..."
        DoEvents

        .Range("A4:I" & lastRow).Borders.LineStyle = xlContinuous
        With .Range("B4:H" & lastRow)
            .HorizontalAlignment = xlCenter
            .Font.Size = 14
        End With
        With Union(.Columns("A"), .Columns("I"))
            .ShrinkToFit = True
            .ColumnWidth = 22
        End With

        frm.ShowProgress 40, "レイアウト整形中：書式設定中..."
        DoEvents

        .Columns("B:H").ColumnWidth = 8.1
        .Range("G3").Font.Color = RGB(37, 101, 148)
        .Range("H3").Font.Color = RGB(235, 83, 59)
        .Rows("4:" & lastRow).RowHeight = 28

        With .PageSetup

            frm.ShowProgress 50, "レイアウト整形中：印刷設定中..."
            DoEvents

            .PrintArea = "A1:I" & lastRow
            .Orientation = xlLandscape
            .PaperSize = xlPaperA4
            .CenterHorizontally = True
            .CenterVertically = True

            frm.ShowProgress 60, "レイアウト整形中：余白設定中..."
            DoEvents

            .TopMargin = Application.CentimetersToPoints(0.1)
            .BottomMargin = Application.CentimetersToPoints(0.1)
            .LeftMargin = Application.CentimetersToPoints(0.1)
            .RightMargin = Application.CentimetersToPoints(0.1)
            .HeaderMargin = Application.CentimetersToPoints(0.1)
            .FooterMargin = Application.CentimetersToPoints(0.1)

            frm.ShowProgress 80, "レイアウト整形中：倍率設定中..."
            DoEvents

            If lastRow <= 15 Then
                .Zoom = 120
            ElseIf lastRow < 25 Then
                .Zoom = 110
            Else
                .Zoom = False
                .FitToPagesWide = 1
                .FitToPagesTall = 1
            End If
        End With

        frm.ShowProgress 90, "レイアウト整形中：タイムスタンプ設定中..."
        DoEvents

        .Range("L1").Value = Now
    End With

    frm.ShowProgress 100, "レイアウト完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")
    Unload frm

    Application.ScreenUpdating = True
    Application.Calculation = xlCalculationAutomatic
    Application.EnableEvents = True
End Sub
Sub スクラッチ生地出し表出力()
    Application.ScreenUpdating = False
    Application.Calculation = xlCalculationManual
    Application.EnableEvents = False

    Dim frm As New frmProgress
    CurrentMacroName = "スクラッチ生地出し表出力"
    frm.Show vbModeless
    frm.ShowProgress 0, "初期化中..."
    DoEvents

    Dim dic As Object, ws製造 As Worksheet, ws出力 As Worksheet
    Set dic = LoadItemDictionary()
    Set ws製造 = Worksheets("製造数")
    Set ws出力 = Worksheets("スクラッチ生地出し")

    With ws出力
        .Cells.Clear
        .Cells(1, 1).Value = "スクラッチ生地出し"
        .Cells(2, 1).Value = "日付"
        Dim sDay As Date, d As Long
        sDay = Worksheets("操作").Cells(1, 2).Value
        For d = 2 To 8
            .Cells(2, d).Value = sDay
            sDay = sDay + 1
        Next d
        .Range("A3:I3").Value = Array("商品名", "月", "火", "水", "木", "金", "土", "日", "生地名")
    End With

    frm.ShowProgress 100, "初期化完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    frm.ShowProgress 0, "集計・書き込み中..."
    DoEvents

    Dim i As Long, j As Long, lastRow As Long, total As Long, count As Long
    Dim panName As String, baseName As String
    Dim 製造数 As Variant, 出す数 As Double
    Dim 納品日 As Date, 生地出し日 As Date
    Dim 日付列 As Variant
    Dim pan As ClsItem
    Dim rowMap As Object: Set rowMap = CreateObject("Scripting.Dictionary")
    Dim dataMap As Object: Set dataMap = CreateObject("Scripting.Dictionary")

    lastRow = ws製造.Cells(Rows.count, 1).End(xlUp).row
    total = lastRow - 4
    count = 0
    日付列 = ws出力.Range("B2:H2").Value

    For i = 5 To lastRow
        panName = ws製造.Cells(i, 1).Value
        baseName = GetBaseName(panName)
        frm.ShowProgress CLng(100 * (i - 4) / total), "集計・書き込み中：" & vbCrLf & panName
        DoEvents

        If dic.exists(panName) Then
            Set pan = dic(panName)
            If pan.Frozen = "×" Then
                If Not dataMap.exists(baseName) Then
                    dataMap(baseName) = Array(baseName, 0, 0, 0, 0, 0, 0, 0, pan.Dough)
                    rowMap(baseName) = True
                End If
                Dim arr As Variant: arr = dataMap(baseName)

                For d = 3 To 16
                    納品日 = ws製造.Cells(3, d).Value
                    製造数 = ws製造.Cells(i, d).Value

                    If Not IsEmpty(製造数) And IsNumeric(製造数) And val(製造数) > 0 Then
                        出す数 = pan.OutputQty(製造数)
                        生地出し日 = 納品日 - pan.FrozenDaysBefore

                        For j = 1 To 7
                            If 日付列(1, j) = 生地出し日 Then
                                arr(j) = NzNum(arr(j)) + 出す数
                                Exit For
                            End If
                        Next j
                    End If
                Next d

                dataMap(baseName) = arr
            End If
        End If
    Next i

    ' 一括出力
    If dataMap.count > 0 Then
        Dim outputArray() As Variant
        ReDim outputArray(1 To dataMap.count, 1 To 9)
        Dim k As Variant
        count = 0
        For Each k In dataMap.Keys
            count = count + 1
            Dim rowArr As Variant: rowArr = dataMap(k)
            For j = 1 To 9
                outputArray(count, j) = rowArr(j - 1)
            Next j
        Next k
        ws出力.Range("A4").Resize(dataMap.count, 9).Value = outputArray
    End If

    frm.ShowProgress 100, "書き込み完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

'//////////////////////////////////////////
'           レイアウト（DoEvents入り）
'//////////////////////////////////////////
    frm.ShowProgress 0, "レイアウト整形中..."
    DoEvents

    lastRow = ws出力.Cells(Rows.count, 1).End(xlUp).row
    With ws出力
        frm.ShowProgress 10, "タイトル設定中..."
        DoEvents
        .Cells.Font.Bold = True
        With .Range("A1:I1")
            .HorizontalAlignment = xlCenterAcrossSelection
            .Font.Size = 16
        End With

        frm.ShowProgress 20, "ヘッダー書式中..."
        DoEvents
        .Range("A2:I3").Font.Size = 14
        .Range("A2:H2").Borders.LineStyle = xlContinuous
        .Range("A2:I3").HorizontalAlignment = xlCenter
        .Range("B2:H2").NumberFormat = "m/d"

        frm.ShowProgress 30, "見出し罫線..."
        DoEvents
        With .Range("A3:I3")
            .Borders.LineStyle = xlContinuous
            .Borders(xlEdgeBottom).LineStyle = xlDouble
        End With

        frm.ShowProgress 40, "データ行書式..."
        DoEvents
        .Range("A4:I" & lastRow).Borders.LineStyle = xlContinuous
        With .Range("B4:H" & lastRow)
            .HorizontalAlignment = xlCenter
            .Font.Size = 14
        End With

        frm.ShowProgress 50, "列幅・色設定..."
        DoEvents
        With Union(.Columns("A"), .Columns("I"))
            .ShrinkToFit = True
            .ColumnWidth = 22
        End With
        .Columns("B:H").ColumnWidth = 8.1
        .Range("G3").Font.Color = RGB(37, 101, 148)
        .Range("H3").Font.Color = RGB(235, 83, 59)
        .Rows("4:" & lastRow).RowHeight = 28

        frm.ShowProgress 60, "印刷設定..."
        DoEvents
        With .PageSetup
            .PrintArea = "A1:I" & lastRow
            .Orientation = xlLandscape
            .PaperSize = xlPaperA4
            .CenterHorizontally = True
            .CenterVertically = True

            frm.ShowProgress 70, "余白設定..."
            DoEvents
            .TopMargin = Application.CentimetersToPoints(0.1)
            .BottomMargin = Application.CentimetersToPoints(0.1)
            .LeftMargin = Application.CentimetersToPoints(0.1)
            .RightMargin = Application.CentimetersToPoints(0.1)
            .HeaderMargin = Application.CentimetersToPoints(0.1)
            .FooterMargin = Application.CentimetersToPoints(0.1)

            frm.ShowProgress 90, "倍率設定..."
            DoEvents
            If lastRow <= 15 Then
                .Zoom = 120
            ElseIf lastRow < 25 Then
                .Zoom = 110
            Else
                .Zoom = False
                .FitToPagesWide = 1
                .FitToPagesTall = 1
            End If
        End With

        frm.ShowProgress 95, "最終仕上げ中..."
        DoEvents
        .Range("L1").Value = Now
    End With

    frm.ShowProgress 100, "レイアウト完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    Unload frm

    Application.ScreenUpdating = True
    Application.Calculation = xlCalculationAutomatic
    Application.EnableEvents = True
End Sub
Sub 並べる表出力()
    Application.ScreenUpdating = False
    Application.Calculation = xlCalculationManual
    Application.EnableEvents = False

    Dim frm As New frmProgress
    CurrentMacroName = "並べる表出力"
    frm.Show vbModeless
    frm.ShowProgress 0, "初期化中..."
    DoEvents

    Dim dic As Object, ws製造 As Worksheet, ws出力 As Worksheet
    Set dic = LoadItemDictionary()
    Set ws製造 = Worksheets("製造数")
    Set ws出力 = Worksheets("並べる表")

    With ws出力
        .Cells.Clear
        .Cells(1, 1).Value = "並べる表"
        .Cells(2, 1).Value = "日付"
        Dim sDay As Date, d As Long
        sDay = Worksheets("操作").Cells(1, 2).Value
        For d = 2 To 8
            .Cells(2, d).Value = sDay
            sDay = sDay + 1
        Next d
        .Range("A3:I3").Value = Array("商品名", "月", "火", "水", "木", "金", "土", "日", "生地名")
    End With

    frm.ShowProgress 100, "初期化完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    frm.ShowProgress 0, "集計・書き込み中..."
    DoEvents

    Dim i As Long, j As Long, lastRow As Long, total As Long, count As Long
    Dim row As Long, 製造数 As Variant, 出す数 As Double
    Dim 納品日 As Date, 並べる日 As Date
    Dim panName As String, baseName As String
    Dim 日付列 As Variant
    Dim pan As ClsItem

    Dim rowMap As Object: Set rowMap = CreateObject("Scripting.Dictionary")
    Dim dataMap As Object: Set dataMap = CreateObject("Scripting.Dictionary")

    lastRow = ws製造.Cells(Rows.count, 1).End(xlUp).row
    total = lastRow - 4
    row = 1
    日付列 = ws出力.Range("B2:H2").Value

    For i = 5 To lastRow
        panName = ws製造.Cells(i, 1).Value
        baseName = GetBaseName(panName)
        frm.ShowProgress CLng(100 * (i - 4) / total), "集計・書き込み中：" & vbCrLf & panName
        DoEvents

        If dic.exists(panName) Then
            Set pan = dic(panName)
            If pan.Display = "〇" Then
                If Not rowMap.exists(baseName) Then
                    rowMap(baseName) = row
                    row = row + 1
                End If
                If Not dataMap.exists(baseName) Then
                    dataMap.Add baseName, Array(baseName, 0, 0, 0, 0, 0, 0, 0, pan.Dough)
                End If
                Dim record As Variant
                record = dataMap(baseName)

                For d = 3 To 16
                    納品日 = ws製造.Cells(3, d).Value
                    製造数 = ws製造.Cells(i, d).Value

                    If Not IsEmpty(製造数) And IsNumeric(製造数) And val(製造数) > 0 Then
                        出す数 = pan.DisplayQty(製造数)
                        並べる日 = 納品日 - pan.DisplayDays
                        For j = 1 To 7
                            If 日付列(1, j) = 並べる日 Then
                                record(j) = NzNum(record(j)) + 出す数
                                Exit For
                            End If
                        Next j
                    End If
                Next d
                dataMap(baseName) = record
            End If
        End If
    Next i

    Dim outputArray() As Variant, k As Variant
    ReDim outputArray(1 To dataMap.count, 1 To 9)
    count = 0

    For Each k In rowMap.Keys
        count = count + 1
        For j = 1 To 9
            outputArray(count, j) = dataMap(k)(j - 1)
        Next j
    Next k

    If count > 0 Then
        ws出力.Range("A4").Resize(count, 9).Value = outputArray
    End If

    frm.ShowProgress 100, "書き込み完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

'////////////////////////////////////////////////////////
'                  レイアウト（DoEvents入り）
'////////////////////////////////////////////////////////

    frm.ShowProgress 0, "レイアウト整形中..."
    DoEvents

    lastRow = ws出力.Cells(Rows.count, 1).End(xlUp).row
    With ws出力
        frm.ShowProgress 10, "レイアウト整形中：タイトル設定中..."
        DoEvents
        .Cells.Font.Bold = True
        With .Range("A1:I1")
            .HorizontalAlignment = xlCenterAcrossSelection
            .Font.Size = 16
        End With

        frm.ShowProgress 20, "レイアウト整形中：ヘッダー書式中..."
        DoEvents
        .Range("A2:I3").Font.Size = 14
        .Range("A2:H2").Borders.LineStyle = xlContinuous
        .Range("A2:I3").HorizontalAlignment = xlCenter
        .Range("B2:H2").NumberFormat = "m/d"

        frm.ShowProgress 30, "レイアウト整形中：項目行ボーダー..."
        DoEvents
        With .Range("A3:I3")
            .Borders.LineStyle = xlContinuous
            .Borders(xlEdgeBottom).LineStyle = xlDouble
        End With

        frm.ShowProgress 40, "レイアウト整形中：データ行書式..."
        DoEvents
        .Range("A4:I" & lastRow).Borders.LineStyle = xlContinuous
        With .Range("B4:H" & lastRow)
            .HorizontalAlignment = xlCenter
            .Font.Size = 14
        End With

        frm.ShowProgress 50, "レイアウト整形中：列幅＆色設定..."
        DoEvents
        With Union(.Columns("A"), .Columns("I"))
            .ShrinkToFit = True
            .ColumnWidth = 22
        End With
        .Columns("B:H").ColumnWidth = 8.1
        .Range("G3").Font.Color = RGB(37, 101, 148)
        .Range("H3").Font.Color = RGB(235, 83, 59)
        .Rows("4:" & lastRow).RowHeight = 28

        frm.ShowProgress 60, "レイアウト整形中：印刷設定..."
        DoEvents
        With .PageSetup
            .PrintArea = "A1:I" & lastRow
            .Orientation = xlPortrait
            .PaperSize = xlPaperA4
            .Zoom = False
            .FitToPagesWide = 1
            .FitToPagesTall = 1
            .CenterHorizontally = True
            .CenterVertically = True

            frm.ShowProgress 70, "レイアウト整形中：余白設定..."
            DoEvents
            .TopMargin = Application.CentimetersToPoints(0.1)
            .BottomMargin = Application.CentimetersToPoints(0.1)
            .LeftMargin = Application.CentimetersToPoints(0.1)
            .RightMargin = Application.CentimetersToPoints(0.1)
            .HeaderMargin = Application.CentimetersToPoints(0.1)
            .FooterMargin = Application.CentimetersToPoints(0.1)
        End With

        frm.ShowProgress 90, "レイアウト整形中：タイムスタンプ..."
        DoEvents
        .Range("L1").Value = Now
    End With

    frm.ShowProgress 100, "レイアウト完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")
    Unload frm

    Application.ScreenUpdating = True
    Application.Calculation = xlCalculationAutomatic
    Application.EnableEvents = True
End Sub
```

```vb
Option Explicit

Sub 発注表作成()
    Application.ScreenUpdating = False
    Application.Calculation = xlCalculationManual
    Application.EnableEvents = False

    CurrentMacroName = "発注書作成"
    Dim frm As New frmProgress
    frm.Show vbModeless
    frm.ShowProgress 0, "集計中..."
    DoEvents

    Dim loRecipe As ListObject, loMas As ListObject
    Set loRecipe = Worksheets("レシピ").ListObjects("レシピ")
    Set loMas = Worksheets("材料マスター").ListObjects("材料マスター")

    Dim r As ListRow
    Dim dicRecipe As Object
    Set dicRecipe = CreateObject("Scripting.Dictionary")
    For Each r In loRecipe.ListRows
        Dim panName As String, zaiName As Variant, UseQty As Double, Tanni As String
        Dim k As Variant
        panName = r.Range(1, loRecipe.ListColumns("商品名").Index).Value
        zaiName = r.Range(1, loRecipe.ListColumns("材料名").Index).Value
        UseQty = r.Range(1, loRecipe.ListColumns("使用量").Index).Value
        Tanni = r.Range(1, loRecipe.ListColumns("単位").Index).Value
        k = panName & "_" & zaiName
        If Not dicRecipe.exists(k) Then
            dicRecipe.Add k, Array(UseQty, Tanni)
        End If
    Next r

    Dim dicMas As Object
    Set dicMas = CreateObject("Scripting.Dictionary")
    For Each r In loMas.ListRows
        Dim InQty As Double, CaseTanni As String, KokyakuName As String
        zaiName = r.Range(1, loMas.ListColumns("材料名").Index).Value
        Tanni = r.Range(1, loMas.ListColumns("単位").Index).Value
        InQty = r.Range(1, loMas.ListColumns("入数").Index).Value
        CaseTanni = r.Range(1, loMas.ListColumns("ケース単位").Index).Value
        KokyakuName = r.Range(1, loMas.ListColumns("仕入先").Index).Value

        If Not dicMas.exists(zaiName) Then
            If KokyakuName <> "" Then
                dicMas.Add zaiName, Array(Tanni, InQty, CaseTanni, KokyakuName)
            End If
        End If
    Next r

    Dim dicPanQty As Object, wsQty As Worksheet
    Set dicPanQty = CreateObject("Scripting.Dictionary")
    Set wsQty = Worksheets("製造数")

    Dim i As Long, lastRow As Long
    Dim allQty As Long, outQty As Double
    Dim pan As New ClsItem
    With wsQty
        lastRow = .Cells(.Rows.count, 1).End(xlUp).row
        For i = 5 To lastRow
            panName = .Cells(i, 1).Value
            allQty = Application.WorksheetFunction.Sum(.Range(.Cells(i, 10), .Cells(i, 16)).Value)
            If dicPanQty.exists(panName) Then
                Set pan = dicPanQty(panName)
                dicPanQty(panName) = dicPanQty(panName) + allQty
            Else
                dicPanQty.Add panName, allQty
            End If
        Next i
    End With

    Dim dicOut As Object
    Set dicOut = CreateObject("Scripting.Dictionary")
    allQty = 0
    For Each k In dicRecipe.Keys
        Dim sp() As String
        sp = Split(k, "_")
        panName = sp(0)
        zaiName = sp(1)

        If dicPanQty.exists(panName) Then
            Dim totalQty As Double
            totalQty = dicPanQty(panName) * dicRecipe(k)(0)

            If dicOut.exists(zaiName) Then
                dicOut(zaiName) = dicOut(zaiName) + totalQty
            Else
                dicOut.Add zaiName, totalQty
            End If
        End If
    Next k

    frm.ShowProgress 100, "集計完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    frm.ShowProgress 0, "書き込み中..."
    DoEvents

    Dim wsOut As Worksheet
    Set wsOut = Worksheets("発注")

    ' テーブルが存在するかチェック
    Dim loOut As ListObject
    Set loOut = Nothing
    On Error Resume Next
    Set loOut = wsOut.ListObjects("発注表")
    On Error GoTo 0

    ' テーブルが存在しない場合は新規作成
    If loOut Is Nothing Then
        With wsOut
            .Cells.Clear
            With .Range("A1:G1")
                .Value = Array("材料名", "必要量", "単位", "ケース単位", "入数", "発注数", "仕入先")
                .Font.Bold = True
                .HorizontalAlignment = xlCenter
            End With

            ' 空のテーブルを作成（ヘッダー行のみ）
            Dim loRange As Range
            Set loRange = .Range("A1:G1")
            Set loOut = .ListObjects.Add(xlSrcRange, loRange, , xlYes)
            loOut.name = "発注表"
        End With
    Else
        ' 既存テーブルのデータ行をクリア（ヘッダーは残す）
        If loOut.ListRows.count > 0 Then
            loOut.DataBodyRange.Delete
        End If
    End If

    Dim row As Long, total As Long, ct As Long
    Dim outputArray() As Variant
    row = 0
    total = dicOut.count
    ReDim outputArray(1 To total, 1 To 7)
    ct = 0

    For Each zaiName In dicOut.Keys
        row = row + 1
        frm.ShowProgress CLng(100 * row / total), "書き込み中：" & vbCrLf & zaiName
        DoEvents

        outputArray(row, 1) = zaiName

        If dicMas.exists(zaiName) Then
            Dim tempArray As Variant
            tempArray = dicMas(zaiName)
            If tempArray(0) = "g" Then
                outputArray(row, 2) = Application.WorksheetFunction.Round(dicOut(zaiName) / 1000, 1)
                outputArray(row, 3) = "kg"
                outputArray(row, 5) = Application.WorksheetFunction.Round(tempArray(1) / 1000, 1) ' 入数もkgに変換
            Else
                outputArray(row, 2) = dicOut(zaiName)
                outputArray(row, 3) = tempArray(0)
                outputArray(row, 5) = tempArray(1)
            End If
            outputArray(row, 4) = tempArray(2)
            outputArray(row, 6) = Application.WorksheetFunction.Ceiling(dicOut(zaiName) / tempArray(1), 1)
            outputArray(row, 7) = tempArray(3)
        Else
            outputArray(row, 3) = "(未登録)"
        End If
    Next zaiName

    ' テーブルにデータを追加
    If total > 0 Then
        Dim newDataRange As Range
        Set newDataRange = wsOut.Range("A2").Resize(UBound(outputArray, 1), UBound(outputArray, 2))
        newDataRange.Value = outputArray

        ' テーブルの範囲を拡張
        loOut.Resize wsOut.Range("A1:G" & (1 + UBound(outputArray, 1)))
    End If

    frm.ShowProgress 100, "書き込み完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    frm.ShowProgress 0, "レイアウト整形中..."
    DoEvents

    ' ソート処理
    If loOut.ListRows.count > 0 Then
        With wsOut.Sort
            .SortFields.Clear
            .SortFields.Add key:=loOut.ListColumns("仕入先").DataBodyRange, Order:=xlDescending, DataOption:=xlSortNormal
            .SetRange loOut.Range
            .Header = xlYes
            .Apply
        End With
    End If

    wsOut.Range("J1").Value = Now
    wsOut.Columns.AutoFit

    frm.ShowProgress 100, "レイアウト完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    Unload frm

    Application.ScreenUpdating = True
    Application.Calculation = xlCalculationAutomatic
    Application.EnableEvents = True
End Sub
Sub 発注表_仕入先別出力()

    Application.ScreenUpdating = False
    Application.Calculation = xlCalculationManual
    Application.EnableEvents = False

    CurrentMacroName = "仕入先別発注表出力"
    Dim frm As New frmProgress
    frm.Show vbModeless
    frm.ShowProgress 0, "初期化中..."
    DoEvents

    Dim wsSrc As Worksheet, wsDest As Worksheet
    Dim dicBySupplier As Object
    Set dicBySupplier = CreateObject("Scripting.Dictionary")

    Set wsSrc = Worksheets("発注")
    Set wsDest = Worksheets("仕入先別発注表")

    With wsDest
        .Cells.Clear
        With .Range("A1")
            .Value = Format(Worksheets("製造数").Range("J3").Value, "mm/dd(aaa)") & "からの製造数での計算です"
            .Font.Bold = True
            .Font.Size = 20
        End With
        With .Range("A1:L1")
            .Merge
            .HorizontalAlignment = xlCenter
        End With
        .Rows(1).RowHeight = 50
    End With

    frm.ShowProgress 100, "初期化完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    frm.ShowProgress 0, "集計中..."
    DoEvents

    Dim wsOrder As Worksheet, loOrder As ListObject, dicOrder As Object
    Set wsOrder = Worksheets("発注並び順")
    Set loOrder = wsOrder.ListObjects("並び順")
    Set dicOrder = CreateObject("Scripting.Dictionary")

    Dim r As ListRow
    Dim sName As Variant, zaiName As Variant
    For Each r In loOrder.ListRows
        sName = r.Range(1, loOrder.ListColumns("仕入先").Index).Value
        zaiName = r.Range(1, loOrder.ListColumns("材料名").Index).Value
        If Not dicOrder.exists(sName) Then
            dicOrder.Add sName, New Collection
        End If
        dicOrder(sName).Add zaiName
    Next r

    Dim lo As ListObject
    Dim UseQty As Variant, QtyUnit As Variant, InQty As Variant, OrderQty As Variant, OneDayQty As Variant

    Set lo = wsSrc.ListObjects("発注表")
    For Each r In lo.ListRows
        With wsSrc
            sName = Trim(r.Range(1, lo.ListColumns("仕入先").Index).Value)
            If sName = "" Then sName = "(仕入先未登録)"

            zaiName = r.Range(1, lo.ListColumns("材料名").Index).Value
            UseQty = r.Range(1, lo.ListColumns("必要量").Index).Value
            QtyUnit = r.Range(1, lo.ListColumns("単位").Index).Value
            InQty = r.Range(1, lo.ListColumns("入数").Index).Value
            OrderQty = r.Range(1, lo.ListColumns("発注数").Index).Value
            OneDayQty = Application.WorksheetFunction.Round(OrderQty / 7, 1)
        End With
        If Not sName = "(仕入先未登録)" Then
            If Not dicBySupplier.exists(sName) Then
                dicBySupplier.Add sName, CreateObject("Scripting.Dictionary")
            End If
            dicBySupplier(sName)(zaiName) = Array(zaiName, UseQty, QtyUnit, InQty, OrderQty, OneDayQty)
        End If
    Next r

    frm.ShowProgress 100, "集計完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    frm.ShowProgress 0, "書き込み中..."
    DoEvents

    Dim k As Variant, orderZai As Variant, v As Variant
    Dim rowLeft As Long: rowLeft = 2
    Dim rowRight As Long: rowRight = 2
    Dim row As Long, startCol As Long
    Dim total As Long, ct As Long
    total = 0: ct = 0
    For Each k In dicBySupplier.Keys
        total = total + dicBySupplier(k).count
    Next k

    For Each k In dicBySupplier.Keys
        If rowLeft <= rowRight Then
            startCol = 1: row = rowLeft
        Else
            startCol = 8: row = rowRight
        End If

        With wsDest
            .Cells(row, startCol).Value = "【" & k & "】"
            .Cells(row, startCol).Font.Bold = True
            With .Range(.Cells(row, startCol), .Cells(row, startCol + 4))
                .Merge
                .HorizontalAlignment = xlCenter
                .Interior.Color = RGB(220, 239, 237)
            End With
            row = row + 1
            .Cells(row, startCol).Resize(1, 5).Value = Array("材料名", "必要量", "入数", "発注数", "1日使用量")
            .Cells(row, startCol).Resize(1, 5).Font.Bold = True
            .Cells(row, startCol).Resize(1, 5).HorizontalAlignment = xlCenter
            row = row + 1

            Dim tempArr() As Variant, fmtArr() As String
            Dim maxCount As Long: maxCount = dicBySupplier(k).count
            ReDim tempArr(1 To maxCount)
            ReDim fmtArr(1 To maxCount)
            Dim i As Long: i = 0
            Dim added As Object: Set added = CreateObject("Scripting.Dictionary")

            If dicOrder.exists(k) Then
                For Each orderZai In dicOrder(k)
                    If dicBySupplier(k).exists(orderZai) Then
                        v = dicBySupplier(k)(orderZai)
                        i = i + 1
                        tempArr(i) = Array(v(0), v(1), v(3), v(4), v(5))
                        fmtArr(i) = CStr(v(2))
                        added(orderZai) = True
                        ct = ct + 1
                        frm.ShowProgress CLng(100 * ct / total), "書き込み中：" & k & vbCrLf & v(0)
                        DoEvents
                    End If
                Next orderZai
            End If

            For Each zaiName In dicBySupplier(k).Keys
                If Not added.exists(zaiName) Then
                    v = dicBySupplier(k)(zaiName)
                    i = i + 1
                    tempArr(i) = Array(v(0), v(1), v(3), v(4), v(5))
                    fmtArr(i) = CStr(v(2))
                    ct = ct + 1
                    frm.ShowProgress CLng(100 * ct / total), "書き込み中：" & k & vbCrLf & v(0)
                    DoEvents
                End If
            Next zaiName

            If i > 0 Then
                .Range(.Cells(row, startCol), .Cells(row + i - 1, startCol + 4)).Value = _
                    Application.Transpose(Application.Transpose(tempArr))

                Dim j As Long
                For j = 1 To i
                    With .Cells(row + j - 1, startCol + 1)
                        Select Case fmtArr(j)
                            Case "kg": .NumberFormat = "0.0""kg"""
                            Case "個": .NumberFormat = "#,##0""個"""
                            Case "枚": .NumberFormat = "#,##0""枚"""
                            Case Else: .NumberFormat = "0.0"
                        End Select
                    End With
                Next j

                .Range(.Cells(row, startCol), .Cells(row + i - 1, startCol + 4)).Borders.LineStyle = xlContinuous
                row = row + i
            End If
        End With

        If startCol = 1 Then
            rowLeft = row + 1
        Else
            rowRight = row + 1
        End If

    Next k

    frm.ShowProgress 100, "書き込み完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")

    frm.ShowProgress 0, "レイアウト整形中..."
    DoEvents
    frm.ShowProgress 10, "レイアウト整形中：印刷設定中..."
    DoEvents

    With wsDest.PageSetup
        .PrintArea = wsDest.Range("A1:L" & Application.Max(rowLeft, rowRight) - 2).Address
        .Orientation = xlPortrait
        .PaperSize = xlPaperA4
        .Zoom = False
        .FitToPagesWide = 1
        .FitToPagesTall = 1
        .CenterHorizontally = True
        .CenterVertically = True
        frm.ShowProgress 30, "レイアウト整形中：余白設定中..."
        DoEvents
        .TopMargin = Application.CentimetersToPoints(0.1)
        .BottomMargin = Application.CentimetersToPoints(0.1)
        .LeftMargin = Application.CentimetersToPoints(0.1)
        .RightMargin = Application.CentimetersToPoints(0.1)
        .HeaderMargin = Application.CentimetersToPoints(0.1)
        .FooterMargin = Application.CentimetersToPoints(0.1)
    End With

    frm.ShowProgress 50, "レイアウト整形中：書式設定中..."
    DoEvents
    With wsDest
        .Rows("2:" & Application.Max(rowLeft, rowRight) - 2).RowHeight = 26
        .Range("A2:L" & Application.Max(rowLeft, rowRight) - 2).Font.Size = 12
        .Columns.AutoFit
        frm.ShowProgress 80, "レイアウト整形中：日時スタンプ追加中..."
        DoEvents
        .Range("O1").Value = Now
    End With

    frm.ShowProgress 100, "レイアウト完了！"
    DoEvents
    Application.Wait Now + TimeValue("0:00:01")
    Unload frm

    Application.ScreenUpdating = True
    Application.Calculation = xlCalculationAutomatic
    Application.EnableEvents = True
End Sub
```

# クラスモジュール

```vb
Option Explicit
Public ItemID As String '商品ID
Public ItemName As String '商品名
Public Price As Double '売価
Public Price2 As Double 'クリエ売価
Public Label As Long 'ラベル番号
Public Label2 As Long 'クリエラベル
Public Finder As Long '金探番号
Public Expiry As Long '消費期限
Public Dough As String '生地名
Public Frozen As String '冷生地表
Public Display As String '並べる表〇
Public FrozenDaysBefore As Long '生地出しの日
Public DisplayDays As Long '並べる日
Public QtyPerUnit As Double '生地数
Public UnitCount As Double '何個入
Public maxQty As Long '最大数
Public Multiple As Double '倍数
Public Bag As String '袋の種類
Public Finish As String '終売

Public Function OutputQty(ByVal count As Double) As Long
    If UnitCount = 0 Then UnitCount = 1
    If QtyPerUnit = 0 Then QtyPerUnit = 1
    OutputQty = WorksheetFunction.RoundUp(count * UnitCount * QtyPerUnit, 0)
End Function

Public Function DisplayQty(ByVal count As Double) As Long
    If UnitCount = 0 Then UnitCount = 1
    DisplayQty = WorksheetFunction.RoundUp(count * UnitCount, 0)
End Function
```

```vb
Option Explicit
Private mName As String, mPrice As Long
Private mMon As Long, mTue As Long, mWed As Long, mThu As Long, mFri As Long, mSat As Long, mSun As Long
Private mLabel As Long, mExDate As Long
Public Property Get ItemName() As String
    ItemName = mName
End Property
Public Property Get Price() As Long
    Price = mPrice
End Property
Public Property Get Mon() As Long
    Mon = mMon
End Property
Public Property Get Tue() As Long
    Tue = mTue
End Property
Public Property Get Wed() As Long
    Wed = mWed
End Property
Public Property Get Thu() As Long
    Thu = mThu
End Property
Public Property Get Fri() As Long
    Fri = mFri
End Property
Public Property Get Sat() As Long
    Sat = mSat
End Property
Public Property Get Sun() As Long
    Sun = mSun
End Property
Public Property Get Label() As Long
    Label = mLabel
End Property
Public Property Get ExDate() As Long
    ExDate = mExDate
End Property
Public Property Let ItemName(ByVal v As String)
    mName = v
End Property
Public Property Let Price(ByVal v As Long)
    mPrice = v
End Property
Public Property Let Mon(ByVal v As Long)
    mMon = v
End Property
Public Property Let Tue(ByVal v As Long)
    mTue = v
End Property
Public Property Let Wed(ByVal v As Long)
    mWed = v
End Property
Public Property Let Thu(ByVal v As Long)
    mThu = v
End Property
Public Property Let Fri(ByVal v As Long)
    mFri = v
End Property
Public Property Let Sat(ByVal v As Long)
    mSat = v
End Property
Public Property Let Sun(ByVal v As Long)
    mSun = v
End Property
Public Property Let Label(ByVal v As Long)
    mLabel = v
End Property
Public Property Let ExDate(ByVal v As Long)
    mExDate = v
End Property
```
