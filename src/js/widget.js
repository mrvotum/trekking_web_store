import CreatingSortedItems from './creatingSortedItems';

export default class Widget {
  constructor() {
    this.btn = document.querySelector('[data-id=btn]');
    this.parent = document.querySelector('[data-id=content]');
    this.sizeMenuList_holder = null;
  }

  create() {
    this.addListener();
    this.addListenersForCheckbox();
  }

  addListener() {
    this.btn.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('click');
    });

    this.parent.addEventListener('click', (event) => {
      if (this.sizeMenuList_holder) {
        this.sizeMenuList_holder.remove();
        this.sizeMenuList_holder = null;
      }
      if (event.toElement.className === 'size_btn' && !this.sizeMenuList_holder) {
        console.log('создаём окно размеров');
        const localParent = event.toElement;

        console.log('Родитель:');
        console.log(localParent);

        const divEl = document.createElement('div');
        divEl.className = 'sizeMenuList_holder';
        divEl.setAttribute('data-id', 'sizeMenuList_holder');
        divEl.innerHTML = `
                    <ul class="sizeMenuList">
                        <li class="sizeMenuLi">extra small</li>
                        <li class="sizeMenuLi">small</li>
                        <li class="sizeMenuLi">middle</li>
                        <li class="sizeMenuLi">large</li>
                        <li class="sizeMenuLi">extra large</li>
                    </ul>`;
        localParent.appendChild(divEl);

        this.sizeMenuList_holder = divEl;
      }
    });
  }

  addListenersForCheckbox() {
    this.checkMen = document.getElementById('men');
    this.checkWomen = document.getElementById('women');
    this.checkChildren = document.getElementById('children');

    this.checkMen.addEventListener('change', () => {
      if (this.checkMen.checked) {
        const creatingSortedItems = new CreatingSortedItems('men');
        creatingSortedItems.create();
      } else {
        document.querySelector('[data-id=criterion_men]').remove();
      }
    });

    this.checkWomen.addEventListener('change', () => {
      if (this.checkWomen.checked) {
        const creatingSortedItems = new CreatingSortedItems('women');
        creatingSortedItems.create();
      } else {
        document.querySelector('[data-id=criterion_women]').remove();
      }
    });

    this.checkChildren.addEventListener('change', () => {
      if (this.checkChildren.checked) {
        const creatingSortedItems = new CreatingSortedItems('children');
        creatingSortedItems.create();
      } else {
        document.querySelector('[data-id=criterion_children]').remove();
      }
    });
  }
}
