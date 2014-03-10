var headroom = new Headroom(elem, {
  "tolerance": 5,
  "offset": 100,
  "classes": {
    "initial": "animated",
    "pinned": "slideDown",
    "unpinned": "slideUp"
  }
});
headroom.init();

// to destroy
headroom.destroy();
