function addItemsToList() {
  $("#js-shopping-list-form").submit((event) => {
    event.preventDefault();
    alert("Submit!");
    const item = $(this).find('input[name="shopping-list-entry"]').val();
    $(".shopping-list").append(
      `<li> <span class="shopping-item">${item}</span> <div class="shopping-item-controls"> <button class="shopping-item-toggle"> <span class="check-button">check</span> </button> <button class="shopping-item-delete"> <span class="delete-button">delete</span> </button> </div> </li>`
    );
    $(checkItemsInList);
    $(deleteItemsInList);
  });
}

function checkItemsInList() {
  $(".check-button").click(function (event) {
    event.preventDefault();
    alert("Check!");
    let item = $(event.currentTarget)
      .parents(".shopping-item-controls")
      .siblings(".shopping-item");
    item.toggleClass("shopping-item__checked");
  });
}

function deleteItemsInList() {
  $(".delete-button").click(function (event) {
    event.preventDefault();
    alert("Delete!");
    let item = $(event.currentTarget)
      .parents(".shopping-item-controls")
      .parents("li");
    item.remove();
  });
}

$(addItemsToList);
$(checkItemsInList);
$(deleteItemsInList);
