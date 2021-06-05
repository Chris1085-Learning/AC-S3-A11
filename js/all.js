// 將table中所有row的action綁定監聽事件
for (let i = 1; i < 14; i++) {
  // target the input element
  const input = document.getElementById(`action__input_${i}`)

  // click handler
  const toggleMenu = (event) => {
    // target the menu element
    const menu = document.getElementById(`action__menu_${i}`)
    menu.classList.toggle('hidden')
  }

  // bind the event
  input.addEventListener('click', toggleMenu)
}

// Check and Uncheck All event
function CheckUncheckAll() {
  const selectAll = document.getElementById('table__input_selectAll')

  if (selectAll.checked == true) {
    const checkboxes = document.getElementsByName('rowSelectCheckBox')
    for (let i = 0, n = checkboxes.length; i < n; i++) {
      checkboxes[i].checked = true
      checkboxes[i].closest('tr').classList.add('highlightRow')
    }
  } else {
    const checkboxes = document.getElementsByName('rowSelectCheckBox')
    for (let i = 0, n = checkboxes.length; i < n; i++) {
      checkboxes[i].checked = false
      checkboxes[i].closest('tr').classList.remove('highlightRow')
    }
  }
}

// Add 'highlightRow' class when checkbox checked
const checkboxes = document.getElementsByName('rowSelectCheckBox')
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function (e) {
    e.target.closest('tr').classList.toggle('highlightRow')
  })
})

// dark mode
// target the switch element
const darkModeToggle = document.getElementById('dark__mode__toggle')

// toggle handler
const darkModeToggleHandler = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
}

// bind the event
darkModeToggle.addEventListener('change', darkModeToggleHandler)
