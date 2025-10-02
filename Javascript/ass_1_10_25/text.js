 //------------------Q1.-------
      document.getElementById("title").textContent =
        "Welcome to Java Fullstack Morning batch";

      //--------------------Q2.------
      let ul = document.getElementById("list");

      let list1 = document.createElement("li");
      list1.textContent = "Fruits";
      ul.appendChild(list1);

      let list2 = document.createElement("li");
      list2.textContent = "Books";
      ul.appendChild(list2);

      let list3 = document.createElement("li");
      list3.textContent = "Food";
      ul.appendChild(list3);

      let list4 = document.createElement("li");
      list4.textContent = "Vinay";
      ul.appendChild(list4);

      // ---------------------Q3-------

      let headings = document.getElementsByTagName("h2");
      console.log(headings[0].textContent);

      let para = document.getElementsByTagName("p")[0];
      para.textContent = "Aditya, Sayali, Harsh and Aakansha";