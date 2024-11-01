class ItemController {
  renderIndex(req, res) {
    res.render("index");
  }

  fetchItems(req, res) {
    const quantity = parseInt(req.query.quantity) || 0;
    const items = this.generateItems(quantity);
    res.render("items", { items });
  }

  generateItems(quantity) {
    return Array.from({ length: quantity }, (_, i) => i + 1);
  }
}

export default ItemController;
