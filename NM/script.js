// رقم الواتساب الخاص بك
const phone = "966541104959";

// نسبة الخصم/العمولة (مثلاً 15% خصم)
const feePercentage = 0.15;

// عناصر الواجهة
const slider = document.getElementById('loanSlider');
const amountDisplay = document.getElementById('amountValue');
const netAmountDisplay = document.getElementById('netAmountValue');
const submitBtn = document.getElementById('submitBtn');
const whatsappFloat = document.getElementById('whatsappFloat');

// دالة تحديث القيم والروابط
function updateLoanDetails() {
    const amount = parseFloat(slider.value);
    
    // حساب الصافي بعد خصم النسبة
    const netAmount = amount - (amount * feePercentage);

    // تحديث الأرقام المعروضة في الشاشة
    amountDisplay.innerText = amount.toLocaleString('ar-SA');
    netAmountDisplay.innerText = Math.round(netAmount).toLocaleString('ar-SA');

    // تجهيز نص رسالة الواتساب
    const message = `السلام عليكم، أرغب في طلب سلفة بقيمة (${amount} ريال).
المبلغ الصافي المتوقع استلامه: (${Math.round(netAmount)} ريال) عبر (إمكان / تمارا / تابي).`;

    // إنشاء رابط الواتساب المشفر
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // تحديث أزرار التواصل
    submitBtn.href = whatsappUrl;
    whatsappFloat.href = whatsappUrl;
}

// الاستماع لحدث سحب أو تغيير قيمة السلايدر
slider.addEventListener('input', updateLoanDetails);

// التشغيل الأولي عند تحميل الصفحة
updateLoanDetails();