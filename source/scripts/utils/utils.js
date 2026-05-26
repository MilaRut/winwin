function removeClasses(arr, classname) {
  arr.forEach((el) => {
    if (el.classList.contains(classname)) {
      el.classList.remove(classname);
    }
  });
}

export {removeClasses};

