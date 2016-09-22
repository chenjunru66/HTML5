
var button = document.getElementsByTagName('button')[0];
// button.addEventListener('click', calc);
function calc() {
    var nums1 = document.getElementById('nums1').value;
    var nums2 = document.getElementById('nums2').value;
// 判断是否为数字
    if (!isNaN(nums1, nums2)) {
        if (nums1 < 1 || nums1 > 9 || nums2 < 1 || nums2 > 9) {
            alert('未按要求输入，请重新输入')
        }
        else if ((nums1 % 1) > 0 && (nums1 % 1) < 1) {
            alert('输入的是小数，请重新输入')
        }
        else if ((nums2 % 1) > 0 && (nums2 % 1) < 1) {
            alert('输入的是小数，请重新输入')
        }
        else {
            // var demo = document.getElementById('demo');
            var result = nums1 * nums2;
            nums1 = parseInt(nums1);
            nums2 = parseInt(nums2);
           
            demo.innerHTML = '计算结果为：' + result;
        }

    }
    // 判断是否为字符串
    else if (typeof nums1 == "string") {
        alert('输入的是字符，请重新输入')
    }
    else if (typeof nums2 == "string") {
        alert('输入的是字符，请重新输入')
    }



}
