document.addEventListener('DOMContentLoaded', () => {
    var name = document.getElementById('ownerName');
    var catsName = document.getElementById('catsName');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    var breed = document.getElementById('formGroupExampleInput');

    document.getElementById('signButton').addEventListener('click', () => {
        document.getElementById('ownerNameModal').value = name.value;
        document.getElementById('catNameModal').value = catsName.value;
        document.getElementById('passwordModal').value = password.value;
        document.getElementById('confirmPasswordModal').value = confirmPassword.value;
        document.getElementById('breedModal').value = breed.value;
    });

});
