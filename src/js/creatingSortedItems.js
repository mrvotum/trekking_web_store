export default class CreatingSortedItems {
  constructor(funcName) {
    this.funcName = funcName;
    this.parent = document.querySelector('[data-id=content]');
  }

  create() {
    console.log(`мутим таблицу для ${this.funcName}`);
    if (this.funcName === 'men') {
      this.sortedByMen();
    } else if (this.funcName === 'women') {
      this.sortedByWomen();
    } else if (this.funcName === 'children') {
      this.sortedByChildren();
    }
  }

  sortedByMen() {
    const divEl = document.createElement('div');
    divEl.className = 'filtered';
    divEl.setAttribute('data-id', 'criterion_men');
    divEl.innerHTML = `
            <div class="filtered_criterion__holder">
                <span class="filtered_criterion">MEN</span>
                <span class="filtered_line"></span>
            </div>
            <div class="filtered_btns">
                <span class="items__pages">1 / 5</span>
                <div class="item_btns">
                    <span class="item_btn">&lsaquo;</span>
                    <span class="item_btn">&rsaquo;</span>
                </div>
            </div>
            <div class="items__holder">
                <div class="item">
                    <div class="item__navbar">
                        <div class="item_size__holder">
                            <span class="size">SIZE</span>
                            <span class="size_btn"></span>
                        </div>
                        <div class="item_colors">
                            <span class="item_color blue"></span>
                            <span class="item_color yellow"></span>
                            <span class="item_color grey"></span>
                        </div>
                    </div>
                    <div class="item_img">
                        <img src="./img/item_men_1.png" alt="item_men_1">
                    </div>
                    <div class="item_footer">
                        <div class="item_name">T-shirt</div>
                        <div class="item_price">5,00</div>
                    </div>
                </div>

                <div class="item">
                    <div class="item__navbar">
                        <div class="item_size__holder">
                            <span class="size">SIZE</span>
                            <span class="size_btn"></span>
                        </div>
                        <div class="item_colors"></div>
                    </div>
                    <div class="item_img">
                        <img src="./img/item_men_2.png" alt="item_men_2">
                    </div>
                    <div class="item_footer">
                        <div class="item_name">Pants forclaz</div>
                        <div class="item_price">30,00</div>
                    </div>
                </div>

                <div class="item">
                    <div class="item__navbar">
                        <div class="item_size__holder">
                            <span class="size">SIZE</span>
                            <span class="size_btn"></span>
                        </div>
                        <div class="item_colors">
                            <span class="item_color yellow"></span>
                        </div>
                    </div>
                    <div class="item_img">
                        <img src="./img/item_men_3.png" alt="item_men_3">
                    </div>
                    <div class="item_footer">
                        <div class="item_name">backpack</div>
                        <div class="item_price">60,00</div>
                    </div>
                </div>
            </div>`;
    this.parent.insertBefore(divEl, this.parent.children[1]);
  }

  sortedByWomen() {
    const divEl = document.createElement('div');
    divEl.className = 'filtered';
    divEl.setAttribute('data-id', 'criterion_women');
    divEl.innerHTML = `
            <div class="filtered_criterion__holder">
            <span class="filtered_criterion">WOMEN</span>
            <span class="filtered_line"></span>
        </div>
        <div class="filtered_btns right">
            <span class="items__pages">1 / 5</span>
            <div class="item_btns">
                <span class="item_btn">&lsaquo;</span>
                <span class="item_btn">&rsaquo;</span>
            </div>
        </div>
        <div class="items__holder">
            <div class="item">
                <div class="item__navbar">
                    <div class="item_size__holder">
                        <span class="size">SIZE</span>
                        <span class="size_btn"></span>
                    </div>
                    <div class="item_colors"></div>
                </div>
                <div class="item_img">
                    <img src="./img/item_women_1.png" alt="item_women_1">
                </div>
                <div class="item_footer">
                    <div class="item_name">Jacket</div>
                    <div class="item_price">60,00</div>
                </div>
            </div>

            <div class="item">
                <div class="item__navbar">
                    <div class="item_size__holder">
                        <span class="size">SIZE</span>
                        <span class="size_btn"></span>
                    </div>
                    <div class="item_colors"></div>
                </div>
                <div class="item_img">
                    <img src="./img/item_women_2.png" alt="item_women_2">
                </div>
                <div class="item_footer">
                    <div class="item_name">trekking shoes</div>
                    <div class="item_price">80,00</div>
                </div>
            </div>

            <div class="item">
                <div class="item__navbar">
                    <div class="item_size__holder">
                        <span class="size">SIZE</span>
                        <span class="size_btn"></span>
                    </div>
                    <div class="item_colors">
                        <span class="item_color pink"></span>
                    </div>
                </div>
                <div class="item_img">
                    <img src="./img/item_women_3.png" alt="item_women_3">
                </div>
                <div class="item_footer">
                    <div class="item_name">T-shirt</div>
                    <div class="item_price">20,00</div>
                </div>
            </div>
        </div>`;
    this.parent.insertBefore(divEl, this.parent.children[1]);
  }

  sortedByChildren() {
    const divEl = document.createElement('div');
    divEl.className = 'filtered';
    divEl.setAttribute('data-id', 'criterion_children');
    divEl.innerHTML = `
            <div class="filtered_criterion__holder">
            <span class="filtered_criterion">CHILDREN</span>
            <span class="filtered_line"></span>
        </div>
        <div class="filtered_btns right">
            <span class="items__pages">1 / 3</span>
            <div class="item_btns">
                <span class="item_btn">&lsaquo;</span>
                <span class="item_btn">&rsaquo;</span>
            </div>
        </div>
        <div class="items__holder">
            <div class="item">
                <div class="item__navbar">
                    <div class="item_size__holder">
                        <span class="size">SIZE</span>
                        <span class="size_btn"></span>
                    </div>
                    <div class="item_colors"></div>
                </div>
                <div class="item_img">
                    <img src="./img/item_women_2.png" alt="item_women_2">
                </div>
                <div class="item_footer">
                    <div class="item_name">shoes</div>
                    <div class="item_price">110,00</div>
                </div>
            </div>

            <div class="item">
                <div class="item__navbar">
                    <div class="item_size__holder">
                        <span class="size">SIZE</span>
                        <span class="size_btn"></span>
                    </div>
                    <div class="item_colors"></div>
                </div>
                <div class="item_img">
                    <img src="./img/item_men_3.png" alt="item_men_3">
                </div>
                <div class="item_footer">
                    <div class="item_name">small bag</div>
                    <div class="item_price">45,00</div>
                </div>
            </div>

            <div class="item">
                <div class="item__navbar">
                    <div class="item_size__holder">
                        <span class="size">SIZE</span>
                        <span class="size_btn"></span>
                    </div>
                    <div class="item_colors">
                        <span class="item_color yellow"></span>
                    </div>
                </div>
                <div class="item_img">
                    <img src="./img/item_men_2.png" alt="item_men_2">
                </div>
                <div class="item_footer">
                    <div class="item_name">PANTS</div>
                    <div class="item_price">20,00</div>
                </div>
            </div>
        </div>`;
    this.parent.insertBefore(divEl, this.parent.children[1]);
  }
}
