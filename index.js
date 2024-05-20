

let contacts = [
    {
        id: 1,
        title : "caleb kakhuba", 
        email : "yuushcaleb@gmail.com", 
        phone : "0123456789",
        fonction : ["function, entreprise"], 
        labels : ["label1, label2, label3"],
    },
    {
        id: 1,
        title : "dan mayele", 
        email : "dan@gmail.com", 
        phone : "0126589489",
        fonction : ["function, entreprise"], 
        labels : ["label1, label2, label3"],
    },
    {
        id: 1,
        title : "mathieu mafuta", 
        email : "mathieu@gmail.com",
        phone : "0128965239",
        fonction : ["function, entreprise"],  
        labels : ["label1, label2, label3"],
    },
];

window.onload (() => {
   return (555);
});

function renderContacts() {
    let tableBody = document.querySelector('.tableBody');
    let tableRowsHTML = ``;

    contacts.forEach((contact)=>{
        tableRowsHTML = `
        <div class="tableRow">
        <div class="column">
            <div class="avatar">A</div>
                <div class="checkbox">
                    <input type="checkbox">
                        </div>
                        ${contact.title}
                        </div>
            <div class="column">${contact.email}</div>
            <div class="column">${contact.phone}</div>
            <div class="column">${contact.fonction}</div>
            <div class="column">${contact.labels.join("")}</div>
        </div>
        `;
    })

    tableBody.innerHTML = tableRowsHTML;
}



// labels
const addLabelBtn = document.querySelector('.fa-sharp');
const labelContainer = document.querySelector('.label-container');
const labelEditorContainer = document.querySelector('.label-editor-container');
const labelEditorInput = document.querySelector('.label-editor-input');
const labelEditorSaveBtn = document.querySelector('.label-editor-save-btn');
const labelEditorCancelBtn = document.querySelector('.label-editor-cancel-btn');

let labels = [];
let currentEditingLabel = null;

function createLabelItem(label) {
  const labelItem = document.createElement('div');
  labelItem.classList.add('label-item');

  const labelText = document.createElement('span');
  labelText.classList.add('label-text');
  labelText.textContent = label;

  const labelActions = document.createElement('div');
  labelActions.classList.add('label-actions');

  const editBtn = document.createElement('button');
  editBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>';
  editBtn.addEventListener('click', () => editLabel(label));

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteBtn.addEventListener('click', () => deleteLabel(label));

  labelActions.appendChild(editBtn);
  labelActions.appendChild(deleteBtn);

  labelItem.appendChild(labelText);
  labelItem.appendChild(labelActions);

  return labelItem;
}

function addLabel(label) {
  const labelItem = createLabelItem(label);
  labelContainer.appendChild(labelItem);
  labels.push(label);
}

function deleteLabel(label) {
  const labelItem = Array.from(labelContainer.children).find(item => item.querySelector('.label-text').textContent === label);
  labelContainer.removeChild(labelItem);
  labels = labels.filter(l => l !== label);
}

function editLabel(label) {
  currentEditingLabel = label;
  labelEditorInput.value = label;
  labelEditorContainer.classList.remove('hidden');
}

function saveLabel() {
  const newLabel = labelEditorInput.value.trim();
  if (newLabel !== '') {
    if (currentEditingLabel) {
      deleteLabel(currentEditingLabel);
      addLabel(newLabel);
    } else {
      addLabel(newLabel);
    }
    currentEditingLabel = null;
    labelEditorContainer.classList.add('hidden');
  }
}

function cancelLabelEdit() {
  currentEditingLabel = null;
  labelEditorContainer.classList.add('hidden');
}

addLabelBtn.addEventListener('click', () => {
  currentEditingLabel = null;
  labelEditorInput.value = '';
  labelEditorContainer.classList.remove('hidden');
});

labelEditorSaveBtn.addEventListener('click', saveLabel);
labelEditorCancelBtn.addEventListener('click', cancelLabelEdit);