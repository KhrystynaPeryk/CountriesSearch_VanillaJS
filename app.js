const appRoot = document.getElementById('app-root');
const header = document.createElement('div');
header.setAttribute('id', 'header');
appRoot.appendChild(header);
const h2 = document.createElement('h2');
h2.innerText = 'Countries Search';
header.appendChild(h2);
const form = document.createElement('form');
header.appendChild(form);
form.setAttribute('action', ' ');
const div1Form = document.createElement('div');
const div2Form = document.createElement('div');
form.appendChild(div1Form);
form.appendChild(div2Form);
div1Form.setAttribute('class', 'container');
div2Form.setAttribute('class', 'container');
const p = document.createElement('p');
div1Form.appendChild(p);
p.innerText= 'Please choose the type of search:';
const radioContainer = document.createElement('div');
div1Form.appendChild(radioContainer);
radioContainer.setAttribute('id', 'radioContainer');
const radio1Div = document.createElement('div');
const radio2Div = document.createElement('div');
radioContainer.appendChild(radio1Div);
radioContainer.appendChild(radio2Div);
const radio1Input = document.createElement('input');
const radio2Input = document.createElement('input');
const label1Input = document.createElement('label');
const label2Input = document.createElement('label');
label1Input.innerText = 'By Region';
label2Input.innerText = 'By Language';
label1Input.setAttribute('for', 'byRegion');
label2Input.setAttribute('for', 'byLanguage');
radio1Input.setAttribute('type', 'radio');
radio2Input.setAttribute('type', 'radio');
radio1Input.setAttribute('id', 'byRegion');
radio2Input.setAttribute('id', 'byLanguage');
radio1Input.setAttribute('name', 'searchType');
radio2Input.setAttribute('name', 'searchType');
radio1Input.setAttribute('value', 'region');
radio2Input.setAttribute('value', 'language');
radio1Div.appendChild(radio1Input);
radio1Div.appendChild(label1Input);
radio2Div.appendChild(radio2Input);
radio2Div.appendChild(label2Input);
const labelSelect = document.createElement('label');
const select = document.createElement('select');
div2Form.appendChild(labelSelect);
div2Form.appendChild(select);
labelSelect.setAttribute('for', 'searchQuery');
labelSelect.innerText = 'Please choose search query:';
select.setAttribute('id', 'searchQuery');
select.setAttribute('name', 'searchQuery');
select.disabled = true;
const optionDefault = document.createElement('option');
select.appendChild(optionDefault);
optionDefault.innerText = 'Select value';
radio1Input.setAttribute('onchange', 'selectList1Enable()');
radio2Input.setAttribute('onchange', 'selectList2Enable()');

function selectList1Enable() {
    select.disabled = false;
    let i, L = select.options.length - 1;
    for (i = L; i >= 1; i--) {
        select.remove(i);
    }
    tableContainer.innerHTML = ' ';
    tableContainer.innerHTML = 'No items, please choose search query';
    let regionList = externalService.getRegionsList();
    for (let country of regionList) {
        let option = document.createElement('option');
        select.appendChild(option);
        option.setAttribute('value', `${country}`);
        option.innerText = `${country}`;
    }
}

function selectList2Enable() {
    select.disabled = false;
    let i, L = select.options.length - 1;
    for (i = L; i >= 1; i--) {
        select.remove(i);
    }
    tableContainer.innerHTML = ' ';
    tableContainer.innerHTML = 'No items, please choose search query';    
    let langList = externalService.getLanguagesList();
    for (let lang of langList) {
        let option = document.createElement('option');
        select.appendChild(option);
        option.setAttribute('value', `${lang}`);
        option.innerText = `${lang}`;
    }
}
const tableContainer = document.createElement('div');
tableContainer.setAttribute('class', 'tableContainer');
appRoot.appendChild(tableContainer);
select.addEventListener('change', function() {
    tableContainer.innerHTML = ' ';
    const table = document.createElement('table');
    tableContainer.appendChild(table);
    const rowHeader = document.createElement('tr');
    table.appendChild(rowHeader);
    const head1 = document.createElement('th');
    const head2 = document.createElement('th');
    const head3 = document.createElement('th');
    const head4 = document.createElement('th');
    const head5 = document.createElement('th');
    const head6 = document.createElement('th');
    table.appendChild(head1);
    table.appendChild(head2);
    table.appendChild(head3);
    table.appendChild(head4);
    table.appendChild(head5);
    table.appendChild(head6);
    head1.innerHTML = 'Country name<span id="countryArrow" onclick="sortTable(0)">&#8597</span>';
    head2.innerText = 'Capital';
    head3.innerText = 'World region';
    head4.innerText = 'Languages';
    head5.innerHTML = 'Area<span id="areaArrow" onclick="sortTable(4)">&#8597</span>';
    head6.innerText = 'Flag';
    if (radio1Input.checked === true) {
        const arrayRegion = externalService.getCountryListByRegion(this.value);
        for (let i = 0; i < arrayRegion.length; i++) {
            let row = document.createElement('tr');
            table.appendChild(row);
            let tdCountryName = document.createElement('td');
            let tdCapital = document.createElement('td');
            let tdWorldRegion = document.createElement('td');
            let tdLanguages = document.createElement('td');
            let tdArea = document.createElement('td');
            let tdFlag = document.createElement('td');
            row.appendChild(tdCountryName);
            row.appendChild(tdCapital);
            row.appendChild(tdWorldRegion);
            row.appendChild(tdLanguages);
            row.appendChild(tdArea);
            row.appendChild(tdFlag);
            tdCountryName.innerText = `${arrayRegion[i].name}`;
            tdCapital.innerText = `${arrayRegion[i].capital}`;
            tdWorldRegion.innerText = `${arrayRegion[i].region}`;
            tdLanguages.innerText = `${Object.values(arrayRegion[i].languages).toString()}`;
            tdArea.innerText = `${arrayRegion[i].area}`;
            tdFlag.innerHTML = `<img src=${arrayRegion[i].flagURL}></img>`;
        }
   } else if (radio2Input.checked === true) {
        const arrayLang = externalService.getCountryListByLanguage(this.value);
        for (let i = 0; i < arrayLang.length; i++) {
            let row = document.createElement('tr');
            table.appendChild(row);
            let tdCountryName = document.createElement('td');
            let tdCapital = document.createElement('td');
            let tdWorldRegion = document.createElement('td');
            let tdLanguages = document.createElement('td');
            let tdArea = document.createElement('td');
            let tdFlag = document.createElement('td');
            row.appendChild(tdCountryName);
            row.appendChild(tdCapital);
            row.appendChild(tdWorldRegion);
            row.appendChild(tdLanguages);
            row.appendChild(tdArea);
            row.appendChild(tdFlag);
            tdCountryName.innerText = `${arrayLang[i].name}`;
            tdCapital.innerText = `${arrayLang[i].capital}`;
            tdWorldRegion.innerText = `${arrayLang[i].region}`;
            tdLanguages.innerText = `${Object.values(arrayLang[i].languages).toString()}`;
            tdArea.innerText = `${arrayLang[i].area}`;
            tdFlag.innerHTML = `<img src=${arrayLang[i].flagURL}></img>`;
        }
    }
});
function sortTable(n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementsByTagName('table');
    switching = true;
    dir = 'asc';
    while (switching) {
        switching = false;
        rows = table[0].rows;
        for (i = 1; i < rows.length - 1; i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName('td')[n];
            y = rows[i + 1].getElementsByTagName('td')[n];
            if (dir === 'asc') {
                if (isNaN(Number(x.innerHTML))) {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        let countryArrow = document.getElementById('countryArrow');
                        countryArrow.innerHTML = '&#8593;';
                        let areaArrow = document.getElementById('areaArrow');
                        areaArrow.innerHTML = '&#8597';
                        break;
                    }
                } else {
                    if (Number(x.innerHTML) > Number(y.innerHTML)) {
                        shouldSwitch = true;
                        let areaArrow = document.getElementById('areaArrow');
                        areaArrow.innerHTML = '&#8593;';
                        let countryArrow = document.getElementById('countryArrow');
                        countryArrow.innerHTML = '&#8597';
                        break;
                    }
                }
            } else if (dir === 'desc') {
                if (isNaN(Number(x.innerHTML))) {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        let countryArrow = document.getElementById('countryArrow');
                        countryArrow.innerHTML = '&#8595;';
                        let areaArrow = document.getElementById('areaArrow');
                        areaArrow.innerHTML = '&#8597';
                        break;
                    }
                } else {
                    if (Number(x.innerHTML) < Number(y.innerHTML)) {
                        shouldSwitch = true;
                        let areaArrow = document.getElementById('areaArrow');
                        areaArrow.innerHTML = '&#8595;';
                        let countryArrow = document.getElementById('countryArrow');
                        countryArrow.innerHTML = '&#8597';
                        break;
                    }
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++;
        } else {
            if (switchcount === 0 && dir === 'asc') {
                dir = 'desc';
                switching = true;
            }
        }
    }
}