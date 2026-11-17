# bic21203-lab4a-javascript

## Student Information
* **Name:** NUR SAKINAH BINTI SABRI
* **Matric Number:** AI250077
* **Course / Section:** BIC21203 — Section 2
* **Lecturer:** Ts. Dr. Ahmad Tajudin Bin Baharin

---

## Project Overview
This repository contains the client-side HTML5 and modern JavaScript solutions for **Lab #4a**, focusing on functions, event handling (`addEventListener`), input validation, `for` loops, and safe DOM manipulation (`textContent` and `createElement`).

### Repository Structure
* `q1/` — **Question 1: Interactive Text Changer** (`index.html`, `script.js`)
* `q2/` — **Question 2: Smart Number Validator** (`index.html`, `script.js`)
* `q3/` — **Question 3: Dynamic Number Generator** (`index.html`, `script.js`)

---

## How to Run Each Question
1. download repository to your local computer.
2. Open desktop web browser like Google Chrome.
3. Navigate to each question's folder and double-click its 'index.html' file to run it directly 
in the browser :
   * **Question 1:** Open `q1/index.html` and click the **Change Message** button.
   * **Question 2:** Open `q2/index.html`, type a value into the input field, and click **Check**.
   * **Question 3:** Open `q3/index.html` and click the **Generate** button.

---

## Implementation Summary & Output Screenshots

### Question 1 — Interactive Text Changer
* **Description:** Uses `document.getElementById()` to select the paragraph and button elements, attaching a click event listener to `changeMessage()` to safely update the paragraph text to `"Hello there!"` via `textContent`.
* **Output Screenshot:**
<img width="842" height="255" alt="Screenshot 2026-11-17 105650" src="https://github.com/user-attachments/assets/0500bc3d-5faa-42df-b302-7c4badcaba76" />
<img width="924" height="181" alt="Screenshot 2026-11-17 105700" src="https://github.com/user-attachments/assets/39c571a3-af48-47bb-aaab-6b2e113cff56" />

---

### Question 2 — Smart Number Validator
* **Description:** Reads and trims user input, validates against empty strings and non-numeric values (`Number.isNaN()`), and evaluates numeric values (including decimals) against `10` using an `if...else if...else` block.
* **Test Cases Verified:** `5`, `10`, `15`, `10.5`, `abc`, and empty/whitespace input.
* **Output Screenshot:**
<img width="585" height="210" alt="Screenshot 2026-11-17 110109" src="https://github.com/user-attachments/assets/2d4b080d-2139-4752-9b83-b6bcf1273d63" />
<img width="635" height="247" alt="Screenshot 2026-11-17 110121" src="https://github.com/user-attachments/assets/a1a69950-6419-49d3-9d16-230c937e7c54" />
<img width="572" height="182" alt="Screenshot 2026-11-17 110140" src="https://github.com/user-attachments/assets/073c891f-aefa-441d-84e2-bc08426138e5" />
<img width="640" height="234" alt="Screenshot 2026-11-17 110152" src="https://github.com/user-attachments/assets/e84a216a-ee67-4409-a26d-4b3ec29c8eb5" />
<img width="634" height="222" alt="Screenshot 2026-11-17 110208" src="https://github.com/user-attachments/assets/a44b0ffd-4f0f-4faf-81ee-3a2ad0f8962f" />

  

---

### Question 3 — Dynamic Number Generator
* **Description:** Clears existing list items before running a `for` loop (`1` to `5`) that dynamically generates `<li>` elements via `document.createElement()` and appends them to `<ol id="numberList">`, preventing duplicate items on repeated clicks.
* **Output Screenshot:**
<img width="461" height="140" alt="image" src="https://github.com/user-attachments/assets/0608bceb-6afe-4984-82f8-a2f71f8f72d8" />
<img width="560" height="246" alt="image" src="https://github.com/user-attachments/assets/dcd7f1ac-e603-4819-9b79-cb5aaae76ad1" />
