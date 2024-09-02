// Hesaplama türleri ve arayüzleri
const calculators = {
    bmi: {
        form: `
            <form id="bmiForm">
                <label for="weight">Kilo (kg):</label>
                <input type="number" id="weight" name="weight" required>
                <label for="height">Boy (cm):</label>
                <input type="number" id="height" name="height" required>
                <button type="submit">Hesapla</button>
            </form>
            <p id="bmiResult"></p>
        `,
        handler: handleBmiCalculation
    },
    age: {
        form: `
            <form id="ageForm">
                <label for="birthYear">Doğum Yılı:</label>
                <input type="number" id="birthYear" name="birthYear" required>
                <button type="submit">Hesapla</button>
            </form>
            <p id="ageResult"></p>
        `,
        handler: handleAgeCalculation
    },
    interest: {
        form: `
            <form id="interestForm">
                <label for="principal">Anapara (TL):</label>
                <input type="number" id="principal" name="principal" required>
                <label for="rate">Faiz Oranı (%):</label>
                <input type="number" id="rate" name="rate" required>
                <label for="time">Süre (Yıl):</label>
                <input type="number" id="time" name="time" required>
                <button type="submit">Hesapla</button>
            </form>
            <p id="interestResult"></p>
        `,
        handler: handleInterestCalculation
    },
    percentage: {
        form: `
            <form id="percentageForm">
                <label for="total">Toplam:</label>
                <input type="number" id="total" name="total" required>
                <label for="value">Değer:</label>
                <input type="number" id="value" name="value" required>
                <button type="submit">Hesapla</button>
            </form>
            <p id="percentageResult"></p>
        `,
        handler: handlePercentageCalculation
    },
    currency: {
        form: `
            <form id="currencyForm">
                <label for="amount">Tutar (USD):</label>
                <input type="number" id="amount" name="amount" required>
                <button type="submit">Dönüştür</button>
            </form>
            <p id="currencyResult"></p>
        `,
        handler: handleCurrencyConversion
    },
    area: {
        form: `
            <form id="areaForm">
                <label for="length">Uzunluk (cm):</label>
                <input type="number" id="length" name="length" required>
                <label for="width">Genişlik (cm):</label>
                <input type="number" id="width" name="width" required>
                <button type="submit">Hesapla</button>
            </form>
            <p id="areaResult"></p>
        `,
        handler: handleAreaCalculation
    },
    volume: {
        form: `
            <form id="volumeForm">
                <label for="length">Uzunluk (cm):</label>
                <input type="number" id="length" name="length" required>
                <label for="width">Genişlik (cm):</label>
                <input type="number" id="width" name="width" required>
                <label for="height">Yükseklik (cm):</label>
                <input type="number" id="height" name="height" required>
                <button type="submit">Hesapla</button>
            </form>
            <p id="volumeResult"></p>
        `,
        handler: handleVolumeCalculation
    },
    binary: {
        form: `
            <form id="binaryForm">
                <label for="decimal">Ondalık Sayı:</label>
                <input type="number" id="decimal" name="decimal" required>
                <button type="submit">Dönüştür</button>
            </form>
            <p id="binaryResult"></p>
        `,
        handler: handleBinaryConversion
    },
    triangle: {
        form: `
            <form id="triangleForm">
                <label for="base">Taban (cm):</label>
                <input type="number" id="base" name="base" required>
                <label for="height">Yükseklik (cm):</label>
                <input type="number" id="height" name="height" required>
                <button type="submit">Hesapla</button>
            </form>
            <p id="triangleResult"></p>
        `,
        handler: handleTriangleAreaCalculation
    },
    sqrt: {
        form: `
            <form id="sqrtForm">
                <label for="number">Sayı:</label>
                <input type="number" id="number" name="number" required>
                <button type="submit">Hesapla</button>
            </form>
            <p id="sqrtResult"></p>
        `,
        handler: handleSquareRootCalculation
    },
    factorial: {
        form: `
            <form id="factorialForm">
                <label for="number">Sayı:</label>
                <input type="number" id="number" name="number" required>
                <button type="submit">Hesapla</button>
            </form>
            <p id="factorialResult"></p>
        `,
        handler: handleFactorialCalculation
    },
    compoundInterest: {
        form: `
            <form id="compoundInterestForm">
                <label for="principal">Anapara (TL):</label>
                <input type="number" id="principal" name="principal" required>
                <label for="rate">Faiz Oranı (%):</label>
                <input type="number" id="rate" name="rate" required>
                <label for="time">Süre (Yıl):</label>
                <input type="number" id="time" name="time" required>
                <label for="compounds">Bileşik Sayısı (Yılda):</label>
                <input type="number" id="compounds" name="compounds" required>
                <button type="submit">Hesapla</button>
            </form>
            <p id="compoundInterestResult"></p>
        `,
        handler: handleCompoundInterestCalculation
    },
    loan: {
        form: `
            <form id="loanForm">
                <label for="amount">Kredi Tutarı (TL):</label>
                <input type="number" id="amount" name="amount" required>
                <label for="rate">Faiz Oranı (%):</label>
                <input type="number" id="rate" name="rate" required>
                <label for="years">Süre (Yıl):</label>
                <input type="number" id="years" name="years" required>
                <button type="submit">Hesapla</button>
            </form>
            <p id="loanResult"></p>
        `,
        handler: handleLoanCalculation
    },
    rectangleArea: {
        form: `
            <form id="rectangleAreaForm">
                <label for="length">Uzunluk (cm):</label>
                <input type="number" id="length" name="length" required>
                <label for="width">Genişlik (cm):</label>
                <input type="number" id="width" name="width" required>
                <button type="submit">Hesapla</button>
            </form>
            <p id="rectangleAreaResult"></p>
        `,
        handler: handleRectangleAreaCalculation
    },
    circleArea: {
        form: `
            <form id="circleAreaForm">
                <label for="radius">Yarıçap (cm):</label>
                <input type="number" id="radius" name="radius" required>
                <button type="submit">Hesapla</button>
            </form>
            <p id="circleAreaResult"></p>
        `,
        handler: handleCircleAreaCalculation
    },
    cylinderVolume: {
        form: `
            <form id="cylinderVolumeForm">
                <label for="radius">Yarıçap (cm):</label>
                <input type="number" id="radius" name="radius" required>
                <label for="height">Yükseklik (cm):</label>
                <input type="number" id="height" name="height" required>
                <button type="submit">Hesapla</button>
            </form>
            <p id="cylinderVolumeResult"></p>
        `,
        handler: handleCylinderVolumeCalculation
    },
    trianglePerimeter: {
        form: `
            <form id="trianglePerimeterForm">
                <label for="side1">Kenar 1 (cm):</label>
                <input type="number" id="side1" name="side1" required>
                <label for="side2">Kenar 2 (cm):</label>
                <input type="number" id="side2" name="side2" required>
                <label for="side3">Kenar 3 (cm):</label>
                <input type="number" id="side3" name="side3" required>
                <button type="submit">Hesapla</button>
            </form>
            <p id="trianglePerimeterResult"></p>
        `,
        handler: handleTrianglePerimeterCalculation
    },
    fahrenheitToCelsius: {
        form: `
            <form id="fahrenheitToCelsiusForm">
                <label for="fahrenheit">Fahrenheit:</label>
                <input type="number" id="fahrenheit" name="fahrenheit" required>
                <button type="submit">Çevir</button>
            </form>
            <p id="fahrenheitToCelsiusResult"></p>
        `,
        handler: handleFahrenheitToCelsiusConversion
    },
    celsiusToFahrenheit: {
        form: `
            <form id="celsiusToFahrenheitForm">
                <label for="celsius">Celsius:</label>
                <input type="number" id="celsius" name="celsius" required>
                <button type="submit">Çevir</button>
            </form>
            <p id="celsiusToFahrenheitResult"></p>
        `,
        handler: handleCelsiusToFahrenheitConversion
    }
};

// Sayfa yüklenirken varsayılan mesaj
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculator-container').innerHTML = '<p>Lütfen bir hesaplama aracı seçin.</p>';
});

// Hesap makinesi gösterme işlevi
function showCalculator(type) {
    const calculator = calculators[type];
    if (!calculator) return;

    document.getElementById('calculator-container').innerHTML = calculator.form;
    
    // Dinamik form gönderme işleyici ekleme
    document.querySelector(`#${type}Form`).addEventListener('submit', calculator.handler);
}

// Fonksiyon tanımlamaları (20 adet)

// BMI Hesaplama Fonksiyonu
function handleBmiCalculation(event) {
    event.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // cm'den m'ye çevir
    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('bmiResult').textContent = `BMI: ${bmi}`;
}

// Yaş Hesaplama Fonksiyonu
function handleAgeCalculation(event) {
    event.preventDefault();
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    document.getElementById('ageResult').textContent = `Yaş: ${age}`;
}

// Faiz Hesaplama Fonksiyonu
function handleInterestCalculation(event) {
    event.preventDefault();
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    const interest = (principal * rate * time / 100).toFixed(2);
    document.getElementById('interestResult').textContent = `Faiz: ${interest}`;
}

// Yüzde Hesaplama Fonksiyonu
function handlePercentageCalculation(event) {
    event.preventDefault();
    const total = parseFloat(document.getElementById('total').value);
    const value = parseFloat(document.getElementById('value').value);
    const percentage = ((value / total) * 100).toFixed(2);
    document.getElementById('percentageResult').textContent = `Yüzde: ${percentage}%`;
}

// Döviz Dönüştürme Fonksiyonu
function handleCurrencyConversion(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = 8.5; // Örnek bir döviz kuru
    const converted = (amount * rate).toFixed(2);
    document.getElementById('currencyResult').textContent = `Dönüştürülen Tutar: ${converted} TL`;
}

// Alan Hesaplama Fonksiyonu
function handleAreaCalculation(event) {
    event.preventDefault();
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const area = (length * width).toFixed(2);
    document.getElementById('areaResult').textContent = `Alan: ${area} cm²`;
}

// Hacim Hesaplama Fonksiyonu
function handleVolumeCalculation(event) {
    event.preventDefault();
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const volume = (length * width * height).toFixed(2);
    document.getElementById('volumeResult').textContent = `Hacim: ${volume} cm³`;
}

// İkili Sayı Dönüştürme Fonksiyonu
function handleBinaryConversion(event) {
    event.preventDefault();
    const decimal = parseInt(document.getElementById('decimal').value);
    const binary = decimal.toString(2);
    document.getElementById('binaryResult').textContent = `İkili Karşılık: ${binary}`;
}

// Üçgen Alanı Hesaplama Fonksiyonu
function handleTriangleAreaCalculation(event) {
    event.preventDefault();
    const base = parseFloat(document.getElementById('base').value);
    const height = parseFloat(document.getElementById('height').value);
    const area = (0.5 * base * height).toFixed(2);
    document.getElementById('triangleResult').textContent = `Üçgen Alanı: ${area} cm²`;
}

// Karekök Hesaplama Fonksiyonu
function handleSquareRootCalculation(event) {
    event.preventDefault();
    const number = parseFloat(document.getElementById('number').value);
    const sqrt = Math.sqrt(number).toFixed(2);
    document.getElementById('sqrtResult').textContent = `Karekök: ${sqrt}`;
}

// Faktöriyel Hesaplama Fonksiyonu
function handleFactorialCalculation(event) {
    event.preventDefault();
    const number = parseInt(document.getElementById('number').value);
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    document.getElementById('factorialResult').textContent = `Faktöriyel: ${factorial}`;
}

// Bileşik Faiz Hesaplama Fonksiyonu
function handleCompoundInterestCalculation(event) {
    event.preventDefault();
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);
    const compounds = parseFloat(document.getElementById('compounds').value);
    const amount = principal * Math.pow((1 + rate / compounds), compounds * time);
    const compoundInterest = (amount - principal).toFixed(2);
    document.getElementById('compoundInterestResult').textContent = `Bileşik Faiz: ${compoundInterest} TL`;
}

// Kredi Hesaplama Fonksiyonu
function handleLoanCalculation(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
    const years = parseInt(document.getElementById('years').value);
    const months = years * 12;
    const monthlyPayment = (amount * rate) / (1 - Math.pow((1 + rate), -months));
    document.getElementById('loanResult').textContent = `Aylık Ödeme: ${monthlyPayment.toFixed(2)} TL`;
}

// Dikdörtgen Alanı Hesaplama Fonksiyonu
function handleRectangleAreaCalculation(event) {
    event.preventDefault();
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const area = (length * width).toFixed(2);
    document.getElementById('rectangleAreaResult').textContent = `Dikdörtgen Alanı: ${area} cm²`;
}

// Daire Alanı Hesaplama Fonksiyonu
function handleCircleAreaCalculation(event) {
    event.preventDefault();
    const radius = parseFloat(document.getElementById('radius').value);
    const area = (Math.PI * radius * radius).toFixed(2);
    document.getElementById('circleAreaResult').textContent = `Daire Alanı: ${area} cm²`;
}

// Silindir Hacmi Hesaplama Fonksiyonu
function handleCylinderVolumeCalculation(event) {
    event.preventDefault();
    const radius = parseFloat(document.getElementById('radius').value);
    const height = parseFloat(document.getElementById('height').value);
    const volume = (Math.PI * radius * radius * height).toFixed(2);
    document.getElementById('cylinderVolumeResult').textContent = `Silindir Hacmi: ${volume} cm³`;
}

// Üçgen Çevresi Hesaplama Fonksiyonu
function handleTrianglePerimeterCalculation(event) {
    event.preventDefault();
    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const side3 = parseFloat(document.getElementById('side3').value);
    const perimeter = (side1 + side2 + side3).toFixed(2);
    document.getElementById('trianglePerimeterResult').textContent = `Üçgen Çevresi: ${perimeter} cm`;
}

// Fahrenheit'tan Celsius'a Dönüşüm Fonksiyonu
function handleFahrenheitToCelsiusConversion(event) {
    event.preventDefault();
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    const celsius = ((fahrenheit - 32) * 5 / 9).toFixed(2);
    document.getElementById('fahrenheitToCelsiusResult').textContent = `Celsius: ${celsius}°C`;
}

// Celsius'tan Fahrenheit'a Dönüşüm Fonksiyonu
function handleCelsiusToFahrenheitConversion(event) {
    event.preventDefault();
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = ((celsius * 9 / 5) + 32).toFixed(2);
    document.getElementById('celsiusToFahrenheitResult').textContent = `Fahrenheit: ${fahrenheit}°F`;
}
