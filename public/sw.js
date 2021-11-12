self.addEventListener("push", (e) => {
    console.log("e :>> ", e.data.text());
    const config = {
      body: e.data.text() || "Ye!!",
      data: {
        dateOfArrival: Date.now(),
        primaryKey: "3",
      },
      icon: "images/logo.png",
      vibrate: [100, 50, 100],
      actions: [
        {
          action: "explore",
          title: "Action1",
          // icon: "images/"
        },
        {
          action: "Other Action",
          title: "Other Action",
          // icon:
        },
      ],
    };
    e.waitUntil(
      self.registration.showNotification("Hello Roger!", config)
    );
  });