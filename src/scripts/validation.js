export function validationDescr(description) {
  return 10 < description.trim().length && description.trim().length < 150;
}

export function validationTitle(title, categories) {
  const titleExists = titleFinder(title, categories);
  return title.trim().length > 3 && titleExists === (null || undefined);
}

function titleFinder(title, array) {
  if (title.length > 0) {
    return array.filter((item) => {
      return item.title.toLowerCase() === title.toLowerCase();
    })[0];
  }
}

export function validationPrice(price) {
  return price > 0;
}

export function validationIng(ingredients) {
  return ingredients.length > 0;
}
export function validationImage(image) {
  return typeof image === "object";
}

export function isCategoryValid(category, categories) {
  return (
    validationTitle(category.title, categories) &&
    validationDescr(category.description)
  );
}

export function validCategory(category, categories) {
  const result = {
    title: validationTitle(category.title, categories),
    description: validationDescr(category.description),
  };
  return result;
}

export function validElement(element, categories) {
  const result = {
    title: validationTitle(element.title, categories),
    description: validationDescr(element.description),
    ingredients: validationIng(element.ingredients),
    price: validationPrice(element.price),
    category:
      validationTitle(element.title, categories) &&
      validationDescr(element.description),

    product:
      validationTitle(element.title, categories) &&
      validationDescr(element.description) &&
      validationIng(element.ingredients) &&
      validationPrice(element.price),
  };

  return result;
}
