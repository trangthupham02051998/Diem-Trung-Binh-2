// $(document).ready() được kích hoạt khi tài liệu html của trang web được load xong và cây DOM được tạo thành.
$(document).ready(function() {
    var students = [];
    // .click(): Kích hoạt sự kiện click trên thành phần hoặc ràng buộc xử lý một sự kiện tới sự kiện click trong javascript.
    $("#btn").on("click", function() {
        var fullName = $("#fullName");
        var matchScore = $("#mathScore");
        var physicalScore = $("#physicalScore");
        var chemicalScore = $("#chemicalScore");

        // Tạo đối tượng
        let student = {
            id: students.length + 1,
            name: fullName.val(),
            math: parseFloat(matchScore.val()),
            physical: parseFloat(physicalScore.val()),
            chemistry: parseFloat(chemicalScore.val()),
            average: "?",
        };
        students.push(student);

        fullName.val("");
        matchScore.val("");
        physicalScore.val("");
        chemicalScore.val("");

        main.insertTable(student, false);
    });
    //  Tinh diem trung binh
    $("#btnCalcAvg").click(function() {
        if (students != null && students.length > 0) {
            $("#table-body").html("");
            for (var i = 0; i < students.length; i++) {
                var student = students[i];
                main.insertTable(student, true);
            }
        }
    });
    // Check HS gioi
    $("#btnStudent").click(function() {
        $('.good-student').css("background", "red");
    });
});

var main = {
    //student: object student truyen vao
    //isAvg: co check tinh diem trung binh
    insertTable: function(student, isAvg) {
        var html = "<tr>";
        html += "<td>" + student.id + "</td>";
        html += "<td>" + student.name + "</td>";
        html += "<td>" + student.math + "</td>";
        html += "<td>" + student.physical + "</td>";
        html += "<td>" + student.chemistry + "</td>";

        //check xem co tinh diem trung binh hay ko
        if (isAvg) {
            var avg = (student.math + student.physical + student.chemistry) / 3;
            if (avg >= 8) {
                html += '<td class="good-student">' + avg + '</td>';
            } else {
                html += "<td>" + avg + "</td>";
            }
        } else {
            html += "<td>" + student.average + "</td>";
        }
        $("#table-body").append(html);
    }
};