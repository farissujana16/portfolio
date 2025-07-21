fetch("assets/data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to load JSON");
    }
    return response.json();
  })
  .then((data) => {
    const tabWeb = document.getElementById("tab-web");
    const tabMobile = document.getElementById("tab-mobile");

    var web = "";
    var mobile = "";

    const techColorMap = {
      Laravel: "danger",
      MySQL: "warning",
      Flutter: "blue",
      Firebase: "warning",
      React: "info",
      Nodejs: "success",
      MongoDB: "success",
      Default: "secondary",
    };

    data.projects.forEach((data) => {
      if (data.platform == "web") {
        web +=
          '<div class="card p-3 rounded" style="background-color: white">\
                        <div class="row">\
                          <div class="col">\
                            <img class="img-card" src="' +
          data.image +
          '" alt="" width="100%"/>\
                          </div>\
                          <div class="col d-flex flex-column justify-content-between">\
                            <h5>' +
          data.title +
          '</h5>\
                            <span class="description project-desc">' +
          data.description +
          "</span>\
                            <div>\
                            " +
          data.technologies
            .map((tech) => {
              const color = techColorMap[tech] || techColorMap.Default;
              return `<span class="badge bg-label-${color} me-1">${tech}</span>`;
            })
            .join("") +
          "\
                            </div>\
                          </div>\
                        </div>\
                      </div>";
      } else if (data.platform == "mobile") {
        mobile +=
          '<div class="card p-3 rounded" style="background-color: white">\
                        <div class="row">\
                          <div class="col">\
                            <img class="img-card" src="' +
          data.image +
          '" alt="" width="100%"/>\
                          </div>\
                          <div class="col d-flex flex-column justify-content-between">\
                            <h5>' +
          data.title +
          '</h5>\
                            <span class="description project-desc">' +
          data.description +
          "</span>\
                            <div>\
                            " +
          data.technologies
            .map((tech) => {
              const color = techColorMap[tech] || techColorMap.Default;
              return `<span class="badge bg-label-${color} me-1">${tech}</span>`;
            })
            .join("") +
          "\
                            </div>\
                          </div>\
                        </div>\
                      </div>";
      }
    });

    const w = document.createElement("div");
    w.innerHTML = web;

    const m = document.createElement("div");
    m.innerHTML = mobile;

    // Tambahkan ke container yang sesuai
    document.getElementById("tab-web").appendChild(w);
    document.getElementById("tab-mobile").appendChild(m);
  })
  .catch((error) => {
    console.error("Error:", error);
    document.getElementById("project-list").innerHTML =
      '<p class="text-danger">Failed to load project data.</p>';
  });
