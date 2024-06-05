class Dropdown{
	constructor(selector, options) {
		this.$el = document.querySelector(selector)

		this.items = options.items
		this.$el.querySelector('.at-js__dropdown-label').textContent = this.items[0].label
		this.$el.addEventListener('click', event => {
			if (event.target.classList.contains('at-js__dropdown-label')) {
				
				if (this.$el.classList.contains('open')) {
					this.close()
				} else {
					this.open()
				} 
			} else if (event.target.tagName.toLowerCase() === 'li') {
				this.select(event.target.dataset.id)
			}
		})

		const itemsHTML = this.items.map(i => {
			return `<li data-id="${i.id}">${i.label}</li>`
		}).join(' ')

		this.$el.querySelector('.at-js__dropdown-menu').insertAdjacentHTML('afterbegin',
		 itemsHTML)
	}

    select(id) {
    	const item = this.items.find(i => i.id === id)
    	this.$el.querySelector('.at-js__dropdown-label').textContent = item.label
    	this.close()
    }

	open(){
		this.$el.classList.add('open')
	}
	close(){
		this.$el.classList.remove('open')
	}
}
 
const dropdown = new Dropdown('#dropdown',{
items: [
	{label: 'Москва', id: 'msk'},
	{label: 'Санкт-Петербург', id: 'sbp'},
	{label: 'Новосибирск', id: 'nsk'},
	{label: 'Краснодар', id: 'krdr'}
	]
})