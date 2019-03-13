// // JS goes here



        const button = document.querySelector('.dropdown-open')
        const button_close = document.querySelector('.dropdown-close')

        const content = document.querySelector('.dropdown-content');

        button.addEventListener('click', () => {toggleContent()})
        button_close.addEventListener('click', () => {toggleContent()})

    
    function toggleContent(){
        content.classList.toggle('dropdown-hidden')
        button.classList.toggle('hidden')
        button_close.classList.toggle('hidden')
        
    }







// // burger.addEventListener('click', () => {
// //   console.log(`clicked!`);
// //   event.stopPropagation();
// // })


// TABS



class TabLink {
    constructor(element) {
      this.element = element;
      
      // Get the custom data attribute on teh Link
      this.data = this.element.dataset.tab;
      // Using the custom data attribute ge tthe associated Item element
      this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
      // Using the Item element, create a new instance of the TabItem class
      this.tabItem = new TabItem(this.item);
      
      this.element.addEventListener('click', () => {
        // Call the select method you define below
        this.select();
      });
    };
  
    select() {
      // Get all of the elements with the tabs-link class
      const links = document.querySelectorAll('.tabs-link');
  
      // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
      links.forEach( link => {
        link.classList.remove('tabs-link-selected')
      });
  
      // Add a class named "tabs-link-selected" to this link
      this.element.classList.add('tabs-link-selected');
      
      // Call the select method on the item associated with this link
      this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      // Select all ".tabs-item" elements from the DOM
      const items = document.querySelectorAll('.tabs-item');
      // Remove the class "tabs-item-selected" from each element
      items.forEach( item => {
        item.classList.remove('tabs-item-selected');
      })
      // Add a class named "tabs-item-selected" to this element 
      this.element.classList.add('tabs-item-selected');
    }
  }
  
  /* START HERE: 
  
  - Select all classes named ".tabs-link" and assign that value to the links variable
  
  - With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList
  
  - In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter
  
  */
  
  let links = document.querySelectorAll('.tabs-link').forEach( link => new TabLink(link));

