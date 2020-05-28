const incomeSection = document.querySelector('.income-area');
const expensesSection = document.querySelector('.expenses-area');
const availableMoney = document.querySelector('.available-money');
const addTransactionPanel = document.querySelector('.add-transaction-panel');

const nameInput = document.querySelector('#name');
const amountInput = document.querySelector('#amount');
const categorySelect = document.querySelector('#category');

const addTransactionBtn = document.querySelector('.add-transaction');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const deleteBtn = document.querySelector('.delete');
const deleteAllBtn = document.querySelector('.delete-all');

let root = document.documentElement;
let ID = 0;
let selectedCategory;
let moneyArr = [0];

const showPanel = () => {
    addTransactionPanel.style.display = 'flex';
}

const closePanel = () => {
    addTransactionPanel.style.display = 'none';
    clearForms();
}

const checkForm = () => {
    if (nameInput.value !== '' && amountInput.value !== '' && categorySelect.value !== 'none') {
        createNewTransaction();
    } else {
        alert('Fill in all the blanks!')
    }
}

const clearForms = () => {
    nameInput.value = '';
    amountInput.value = '';
    categorySelect.value = 'none';
}

const createNewTransaction = () => {
    const newTransaction = document.createElement('div');
    newTransaction.classList.add('transaction');
    newTransaction.setAttribute('id', ID);

    newTransaction.innerHTML = `<p class="transaction-name">${nameInput.value}</p>
    <p class="transaction-amount">${amountInput.value} zł<button class="delete" onclick="deleteTransaction(${ID})">X</button></p>`

    amountInput.value > 0 ? incomeSection.appendChild(newTransaction) && newTransaction.classList.add('income') : expensesSection.appendChild(newTransaction) && newTransaction.classList.add('expense');
    moneyArr.push(parseFloat(amountInput.value));

    closePanel();
    ID++;
    clearForms();
}

addTransactionBtn.addEventListener('click', showPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', checkForm, createNewTransaction)