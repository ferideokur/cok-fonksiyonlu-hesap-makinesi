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
function handleBmiCalculation(event) { /*...*/ }
function handleAgeCalculation(event) { /*...*/ }
function handleInterestCalculation(event) { /*...*/ }
function handlePercentageCalculation(event) { /*...*/ }
function handleCurrencyConversion(event) { /*...*/ }
function handleAreaCalculation(event) { /*...*/ }
function handleVolumeCalculation(event) { /*...*/ }
function handleBinaryConversion(event) { /*...*/ }
function handleTriangleAreaCalculation(event) { /*...*/ }
function handleSquareRootCalculation(event) { /*...*/ }
function handleFactorialCalculation(event) { /*...*/ }
function handleCompoundInterestCalculation(event) { /*...*/ }
function handleLoanCalculation(event) { /*...*/ }
function handleRectangleAreaCalculation(event) { /*...*/ }
function handleCircleAreaCalculation(event) { /*...*/ }
function handleCylinderVolumeCalculation(event) { /*...*/ }
function handleTrianglePerimeterCalculation(event) { /*...*/ }
function handleFahrenheitToCelsiusConversion(event) { /*...*/ }
function handleCelsiusToFahrenheitConversion(event) { /*...*/ }
