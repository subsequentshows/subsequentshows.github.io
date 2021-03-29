   // Bài 1: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. 
        // Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
        // tim ra 2 so min va max roi dung vong lap
        function sumInterval(a, b) {
            if (Math.abs(a - b) < 1) {
                return;
            }
            let sum = 0;
            for (let i = Math.min(a, b) + 1; i < Math.max(a, b); i++) {
                sum += i
            }
            return sum
        }



        // Bài 2: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
        function sum(a) {
            let sum = a;
            for (let i = 0; i < a; i++) {
                if (a % i == 0) {
                    sum += i;
                }
            }
            return sum;
        }

        // Bài 3: Cho 1 số nguyên dương, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
        function prime(number) {
            if (number < 2) {
                return false
            }
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    return false
                }
            }
            return true
            
        }
        // Bài 4: Cho 1 số nguyên dương. Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số truyền vào.
        function sumPrime(num) {
            let sum = 0;
            for (let i = 2; i <= num; i++) {
                if (prime(i)) {
                    sum += i
                }
            }
            return sum
        }


        // Bài 5: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. 
        // Ví dụ: ''HELLO world'' => ''Hello World''.        
        function capitalizeString(string) {
            let strToArr = str.split(' ')
            for (let i = 0; i < strToArr.length; i++) {
                strToArr[i] = strToArr[i].slice(0, 1).toUpperCase() + strToArr[i].slice(1).toLowerCase()
            }
            return strToArr.join(' ')        // }

        // Bài 6: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.
        // str.replace('', '-') replaceALl, subStr, slice
        function spinalString(str) {
            let strToArr = str.split(' ')
            for (let i = 0; i < strToArr.length; i++) {
                strToArr[i] = strToArr[i].toLowerCase()
            }
            return strToArr.join('-')
        }

        //Bài 7: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không 
        //(đọc xuôi hay ngược đều như nhau, không tính khoảng trắng và không phân biệt hoa thường), 
        //kết quả trả về true hoặc false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.
        //"Race car" -> "racecar" 0 == length - 1 ?
        function isSymmetric(str) {
            let transformStr = str.split(" ").join("").toLowerCase()
            return transformStr === transformStr.split("").reverse().join("")
        }
