// const responsive = {
//     ID_CONTACT_CONTAINER: 'checkbox-chat-item-c1',
//     CLASS_CHECKBOX_CHAT: 'checkbox-items-chats-windows',
//     ID_CHAT_CONTAINER: 'chat-container',
//     SCREEN_WIDTH: 700,
//     view: {
//         // Checboxs[] que realizan la accion de abrir o cerrar un chat
//         arrayCheckboxChat: 0,
//         // CheckboxContact
//         checkboxContact: 0,
//         // CheckboxContact
//         chatContainer: 0
//     },
//     fun: {
//         isMovil: () => {
//             return (window.innerWidth <= responsive.SCREEN_WIDTH) ? true : false;
//         },
//         declareElementsHtml: () => {
//             responsive.view.checkboxContact = document.getElementById(responsive.ID_CONTACT_CONTAINER);
//             responsive.view.arrayCheckboxChat = document.querySelectorAll(`.${ responsive.CLASS_CHECKBOX_CHAT }`);
//             responsive.view.chatContainer = document.getElementById(responsive.ID_CHAT_CONTAINER);
//         },
//         showActiveWindow: (checkbox) => {
//             for (let i of responsive.view.arrayCheckboxChat) {
//                 if (checkbox.id !== i.id) {
//                     i.checked = false;
//                     i.parentNode.style.height = 'auto';
//                 }
//             }
//             if (checkbox.checked === false || checkbox.id === responsive.ID_CONTACT_CONTAINER) {
//                 responsive.view.checkboxContact.checked = true;
//                 responsive.view.chatContainer.style.height = 'auto';
//                 checkbox.parentNode.style.height = 'auto';
//                 document.querySelector(".item-container-contact").style.height = '100%';
//             } else if (checkbox.id !== responsive.ID_CONTACT_CONTAINER) {
//                 responsive.view.checkboxContact.checked = false;
//                 responsive.view.chatContainer.style.height = '100%';
//                 checkbox.parentNode.style.height = '100%';
//                 document.querySelector(".item-container-contact").style.height = 'auto';
//             }
//         },
//         showHideWindow: (checkbox, bool) => {
//             checkbox.checked = bool;
//         },
//         invertShowHideWindow: (checkbox) => {
//             if (checkbox.id === responsive.ID_CONTACT_CONTAINER) {
//                 checkbox.checked = !checkbox.checked;
//                 console.log("SI");
//             } else {

//             }
//         }
//     },
//     methods: {
//         labelOnclick: () => {
//             responsive.fun.declareElementsHtml();
//             let checkbox = responsive.view.arrayCheckboxChat;
//             for (let i = 0; i < checkbox.length; i++) {
//                 checkbox[i].onchange = (evt) => {
//                     if (responsive.fun.isMovil()) {
//                         // responsive.fun.showActiveWindow(checkbox[i]);
//                         // responsive.fun.invertShowHideWindow(checkbox[i]);
//                     }
//                 }
//                 responsive.view.checkboxContact.checked = true;
//             }
//         }


//     }
// }

// window.onresize = () => responsive.methods.labelOnclick();