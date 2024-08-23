
// التعامل مع نموذج إنشاء الحساب
document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // التحقق من أن الحقول ليست فارغة
    if (email && password) {
        // حفظ بيانات المستخدم في localStorage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        alert('تم إنشاء الحساب بنجاح!');

        // توجيه المستخدم إلى صفحة تسجيل الدخول
        window.location.href = 'index.html';
    } else {
        alert('يرجى تعبئة جميع الحقول.');
    }
});

// التعامل مع نموذج تسجيل الدخول
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // استرجاع بيانات المستخدم من localStorage
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // التحقق من صحة بيانات تسجيل الدخول
    if (email === storedEmail && password === storedPassword) {
        alert('تم تسجيل الدخول بنجاح!');
        
        // تحديث شريط التنقل بعد تسجيل الدخول
        const navbar = document.querySelector('.navbar-nav');
        const accountNavItem = document.createElement('li');
        accountNavItem.className = 'nav-item';

        // إضافة الرابط مع البريد الإلكتروني
        const accountLink = document.createElement('a');
        accountLink.className = 'nav-link';
        accountLink.href = '#'; // هنا يمكنك وضع رابط إلى صفحة الحساب
        accountLink.textContent = `حسابك: ${email}`;

        accountNavItem.appendChild(accountLink);
        navbar.appendChild(accountNavItem);

        // توجيه المستخدم إلى الصفحة الرئيسية أو لوحة التحكم
        window.location.href = 'index.html'; // مثال لصفحة رئيسية
    } else {
        alert('البريد الإلكتروني أو كلمة المرور غير صحيحة. حاول مرة أخرى.');
    }
});


document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault(); // منع إعادة التحميل الافتراضية

        // احصل على البريد الإلكتروني وكلمة المرور من الحقول
        var email = document.getElementById('registerEmail').value;
        var password = document.getElementById('registerPassword').value;

        // جلب قائمة المستخدمين الحالية من التخزين المحلي
        var users = JSON.parse(localStorage.getItem('users')) || [];

        // تحقق من عدم وجود المستخدم مسبقاً
        var userExists = users.some(function(user) {
            return user.email === email;
        });

        if (userExists) {
            alert('هذا البريد الإلكتروني مسجل بالفعل.');
        } else {
            // إضافة المستخدم الجديد إلى القائمة
            users.push({ email: email, password: password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('تم إنشاء الحساب بنجاح!');
            window.location.href = 'Signin.html';
        }
    });


