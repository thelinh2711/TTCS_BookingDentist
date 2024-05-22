
document.addEventListener('DOMContentLoaded', function () {
    var editableContents = document.querySelectorAll('.editableContent');

    editableContents.forEach(function (editableContent) {
        editableContent.addEventListener('click', function () {
            // Chỉ tạo input nếu không tồn tại
            if (!this.querySelector('input')) {
                var inputField = document.createElement('input');
                inputField.type = 'text';
                inputField.value = this.innerText;
                // Điều chỉnh kích thước và kiểu dáng của ô input tại đây
                inputField.style.width = '50%'; // Giảm chiều rộng
                inputField.style.height = '20px'; // Điều chỉnh chiều cao
                inputField.style.fontSize = '14px'; // Điều chỉnh kích thước font
                inputField.style.margin = '10px 0'; // Thêm khoảng cách trên và dưới
                inputField.style.padding = '5px'; // Thêm padding để dễ nhập liệu hơn

                this.innerHTML = '';
                this.appendChild(inputField);
                inputField.focus();

                inputField.addEventListener('keypress', function (e) {
                    if (e.key === 'Enter') {
                        this.parentNode.innerText = this.value; // Cập nhật nội dung mới
                    }
                });
            }
        });
    });
});


const imagePreviews = document.querySelectorAll('.image-preview');
const imageUploads = document.querySelectorAll('.image-upload');

imagePreviews.forEach(function(imagePreview, index) {
  imagePreview.addEventListener('click', function() {
    imageUploads[index].click();
  });
});

imageUploads.forEach(function(imageUpload) {
  imageUpload.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function() {
        imageUpload.previousElementSibling.setAttribute('src', reader.result);
      }
      reader.readAsDataURL(file);
    }
  });
});