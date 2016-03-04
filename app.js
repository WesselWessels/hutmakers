

angular.module('hutmakers', ['ngDialog'])
  .controller('Menu', function(ngDialog) {
    var gameControl = this;

    gameControl.viewOrder = false;
    gameControl.menuItems = {
        bread: 
        [
            {name: "Seaded Bagel", price: 7.5, quantity: 0, vegan: false},
            {name: "Whole Wheat Bagel", price: 7.5, quantity: 0, vegan: false},
            {name: "Yogurt Flatbread", price: 7.5, quantity: 0, vegan: false},
            {name: "Vegan Flatbread", price: 7.5, quantity: 0, vegan: true},
            {name: "Wrap", price: 7.5, quantity: 0, vegan: true},
            {name: "French Loaf", price: 7.5, quantity: 0, vegan: false},
            {name: "Rustic Ciabata", price: 7.5, quantity: 0, vegan: false},
            {name: "Butter Croissant", price: 10.5, quantity: 0, vegan: false}
        ],
        spread:
        [
            {name: "Basil Pesto", price: 6, quantity: 0, vegan: true},
            {name: "Sundried Pesto", price: 5, quantity: 0, vegan: true},
            {name: "Humus", price: 4.5, quantity: 0, vegan: true},
            {name: "Guacamole", price: 3.5, quantity: 0, vegan: false},
            {name: "Cream Cheese", price: 3.5, quantity: 0, vegan: false},
            {name: "Thai Pesto", price: 6, quantity: 0, vegan: true},
            {name: "Red ???", price: 6, quantity: 0, vegan: false},
            {name: "Coriander + Chilli Pesto", price: 6, quantity: 0, vegan: false}
        ],
        greens:
        [
            {name: "Baby Spinach", price: 6, quantity: 0, vegan: true},
            {name: "Lola Bionda", price: 6, quantity: 0, vegan: true},
            {name: "Lola Rosa", price: 6, quantity: 0, vegan: true},
            {name: "Aragula", price: 4, quantity: 0, vegan: true},
            {name: "Kale", price: 3, quantity: 0, vegan: true},
            {name: "Butter Lettuce", price: 6, quantity: 0, vegan: true},
            {name: "Mixed Lettuce", price: 6, quantity: 0, vegan: true},
            {name: "Barley", price: 1.5, quantity: 0, vegan: true},
            {name: "Cous-cous", price: 1.5, quantity: 0, vegan: true},
            {name: "Quinoa", price: 0, quantity: 0, vegan: true},
            {name: "Wild Rice", price: 1.5, quantity: 0, vegan: true},
            {name: "Bulgar Wheat", price: 1.5, quantity: 0, vegan: true}
        ],
        veg: 
        [   
            {name: "Grated Carrots", price: 3, quantity: 0, vegan: true},
            {name: "Baby Tomato", price: 2.5, quantity: 0, vegan: true},
            {name: "Red+Green Peppers", price: 3.5, quantity: 0, vegan: true},
            {name: "Beet Root", price: 4, quantity: 0, vegan: true},
            {name: "Avo", price: 5, quantity: 0, vegan: true},
            {name: "Pepper dews", price: 5.5, quantity: 0, vegan: true},
            {name: "Cucumber", price: 5, quantity: 0, vegan: true},
            {name: "Pineapple", price: 4.5, quantity: 0, vegan: true},
            {name: "Sprouts", price: 2.5, quantity: 0, vegan: true},
            {name: "Mushrooms", price: 3, quantity: 0, vegan: true},
            {name: "Pepperdews", price: 5.5, quantity: 0, vegan: true},
            {name: "Citrus Pieces", price: 2.5, quantity: 0, vegan: true},
            {name: "Red Onion", price: 1.5, quantity: 0, vegan: true},
            {name: "Spring Onion", price: 4.5, quantity: 0, vegan: true},
            {name: "Grapes", price: 3, quantity: 0, vegan: true},
            {name: "Fried Mushrooms", price: 2.5, quantity: 0, vegan: true}
        ],
        cheese: 
        [
            {name: "Parmesan", price: 7.8, quantity: 0, vegan: false},
            {name: "White Cheddar", price: 7.5, quantity: 0, vegan: false},
            {name: "Mozzarella", price: 7.9, quantity: 0, vegan: false},
            {name: "Feta", price: 5.5, quantity: 0, vegan: false},
            {name: "Chunky Cottage Cheese", price: 6.5, quantity: 0, vegan: false},
            {name: "Parmesan Crisps", price: 8, quantity: 0, vegan: false},
        ],
        meat: 
        [
            {name: "Pulled Pork", price: 7.5, quantity: 0, vegan: false},
            {name: "Bacon", price: 12, quantity: 0, vegan: false},
            {name: "Seared Chicken + Herb", price: 7.5, quantity: 0, vegan: false},
            {name: "Rare Roast Beef", price: 8.5, quantity: 0, vegan: false},
            {name: "Smoked Chicken", price: 7.5, quantity: 0, vegan: false},
            {name: "Gypsy Ham", price: 7.5, quantity: 0, vegan: false},
            {name: "Salami", price: 8, quantity: 0, vegan: false},
            {name: "Smoked Salmon", price: 12, quantity: 0, vegan: false},
            {name: "Tofu", price: 7.5, quantity: 0, vegan: true},
            {name: "????", price: 0, quantity: 0, vegan: false}
        ],
        nuts:
        [
            {name: "Mixed Nuts", price: 4, quantity: 0, vegan: false},
            {name: "Pumkin Seeds", price: 3.5, quantity: 0, vegan: false},
            {name: "Spicy Sunflower Seeds", price: 2, quantity: 0, vegan: false},
            {name: "Pine Nuts", price: 2, quantity: 0, vegan: false},
            {name: "Tortilla Chips", price: 5, quantity: 0, vegan: false},
            {name: "Dried Apricots", price: 2.5, quantity: 0, vegan: false},
            {name: "Sweet Sultanas", price: 3, quantity: 0, vegan: false}
        ]
    };

    gameControl.addBread = function(data){
        gameControl.menuItems.bread[data].quantity++
        //gameControl.menuItems.bread[data]= !gameControl.actualPlayers[data].selected
        //console.log(data);
    };

      gameControl.removeBread = function(data){
        var temp = gameControl.menuItems.bread[data].quantity - 1
        if (temp < 0) {
            temp = 0
        }
        gameControl.menuItems.bread[data].quantity = temp
        //gameControl.menuItems.bread[data]= !gameControl.actualPlayers[data].selected
        //console.log(data);
    };

    gameControl.getBreadPrice = function(){
        var price = 0;
        angular.forEach(gameControl.menuItems.bread, function(bread){
            price += bread.quantity * bread.price;
        });
        return price;
    };

    gameControl.addSpread = function(data){
        gameControl.menuItems.spread[data].quantity++
        //gameControl.menuItems.bread[data]= !gameControl.actualPlayers[data].selected
        //console.log(data);
    };

      gameControl.removeSpread = function(data){
        var temp = gameControl.menuItems.spread[data].quantity - 1
        if (temp < 0) {
            temp = 0
        }
        gameControl.menuItems.spread[data].quantity = temp
        //gameControl.menuItems.bread[data]= !gameControl.actualPlayers[data].selected
        //console.log(data);
    };

    gameControl.getSpreadPrice = function(){
        var price = 0;
        angular.forEach(gameControl.menuItems.spread, function(spread){
            price += spread.quantity * spread.price;
        });
        return price;
    };

    gameControl.addGreen = function(data){
        gameControl.menuItems.greens[data].quantity++
        //gameControl.menuItems.bread[data]= !gameControl.actualPlayers[data].selected
        //console.log(data);
    };

      gameControl.removeGreen = function(data){
        var temp = gameControl.menuItems.greens[data].quantity - 1
        if (temp < 0) {
            temp = 0
        }
        gameControl.menuItems.greens[data].quantity = temp
        //gameControl.menuItems.bread[data]= !gameControl.actualPlayers[data].selected
        //console.log(data);
    };

    gameControl.getGreenPrice = function(){
        var price = 0;
        angular.forEach(gameControl.menuItems.greens, function(greens){
            price += greens.quantity * greens.price;
        });
        return price;
    };

    gameControl.addVeg = function(data){
        gameControl.menuItems.veg[data].quantity++
        //gameControl.menuItems.bread[data]= !gameControl.actualPlayers[data].selected
        //console.log(data);
    };

      gameControl.removeVeg = function(data){
        var temp = gameControl.menuItems.veg[data].quantity - 1
        if (temp < 0) {
            temp = 0
        }
        gameControl.menuItems.veg[data].quantity = temp
        //gameControl.menuItems.bread[data]= !gameControl.actualPlayers[data].selected
        //console.log(data);
    };

    gameControl.getVegPrice = function(){
        var price = 0;
        angular.forEach(gameControl.menuItems.veg, function(veg){
            price += veg.quantity * veg.price;
        });
        return price;
    };

    gameControl.addCheese = function(data){
        gameControl.menuItems.cheese[data].quantity++
        //gameControl.menuItems.bread[data]= !gameControl.actualPlayers[data].selected
        //console.log(data);
    };

      gameControl.removeCheese = function(data){
        var temp = gameControl.menuItems.cheese[data].quantity - 1
        if (temp < 0) {
            temp = 0
        }
        gameControl.menuItems.cheese[data].quantity = temp
        //gameControl.menuItems.bread[data]= !gameControl.actualPlayers[data].selected
        //console.log(data);
    };

    gameControl.getCheesePrice = function(){
        var price = 0;
        angular.forEach(gameControl.menuItems.cheese, function(cheese){
            price += cheese.quantity * cheese.price;
        });
        return price;
    };

    gameControl.addMeat = function(data){
        gameControl.menuItems.meat[data].quantity++
        //gameControl.menuItems.bread[data]= !gameControl.actualPlayers[data].selected
        //console.log(data);
    };

      gameControl.removeMeat = function(data){
        var temp = gameControl.menuItems.meat[data].quantity - 1
        if (temp < 0) {
            temp = 0
        }
        gameControl.menuItems.meat[data].quantity = temp
        //gameControl.menuItems.bread[data]= !gameControl.actualPlayers[data].selected
        //console.log(data);
    };

    gameControl.getMeatPrice = function(){
        var price = 0;
        angular.forEach(gameControl.menuItems.meat, function(meat){
            price += meat.quantity * meat.price;
        });
        return price;
    };

    gameControl.addNuts = function(data){
        gameControl.menuItems.nuts[data].quantity++
        //gameControl.menuItems.bread[data]= !gameControl.actualPlayers[data].selected
        //console.log(data);
    };

      gameControl.removeNuts = function(data){
        var temp = gameControl.menuItems.nuts[data].quantity - 1
        if (temp < 0) {
            temp = 0
        }
        gameControl.menuItems.nuts[data].quantity = temp
        //gameControl.menuItems.bread[data]= !gameControl.actualPlayers[data].selected
        //console.log(data);
    };

    gameControl.getNutsPrice = function(){
        var price = 0;
        angular.forEach(gameControl.menuItems.nuts, function(nuts){
            price += nuts.quantity * nuts.price;
        });
        return price;
    };

    gameControl.getFillingPrice = function(){
        var price = 0;
       
        angular.forEach(gameControl.menuItems.veg, function(veg){
            price += veg.quantity * veg.price;
        });
        angular.forEach(gameControl.menuItems.cheese, function(cheese){
            price += cheese.quantity * cheese.price;
        });
        angular.forEach(gameControl.menuItems.meat, function(meat){
            price += meat.quantity * meat.price;
        });
        angular.forEach(gameControl.menuItems.nuts, function(nuts){
            price += nuts.quantity * nuts.price;
        });
        return price;
    };

     gameControl.getTotalPrice = function(){
        var price = 0;
        angular.forEach(gameControl.menuItems.bread, function(bread){
            price += bread.quantity * bread.price;
        });
        angular.forEach(gameControl.menuItems.spread, function(spread){
            price += spread.quantity * spread.price;
        });
        angular.forEach(gameControl.menuItems.greens, function(greens){
            price += greens.quantity * greens.price;
        });
        angular.forEach(gameControl.menuItems.veg, function(veg){
            price += veg.quantity * veg.price;
        });
        angular.forEach(gameControl.menuItems.cheese, function(cheese){
            price += cheese.quantity * cheese.price;
        });
        angular.forEach(gameControl.menuItems.meat, function(meat){
            price += meat.quantity * meat.price;
        });
        angular.forEach(gameControl.menuItems.nuts, function(nuts){
            price += nuts.quantity * nuts.price;
        });
        return price;
    };

    gameControl.clearAll = function(){
        angular.forEach(gameControl.menuItems.bread, function(bread){
            bread.quantity = 0;
        });
        angular.forEach(gameControl.menuItems.spread, function(spread){
            spread.quantity = 0;
        });
        angular.forEach(gameControl.menuItems.greens, function(greens){
            greens.quantity = 0;
        });
        angular.forEach(gameControl.menuItems.veg, function(veg){
            veg.quantity = 0;
        });
        angular.forEach(gameControl.menuItems.cheese, function(cheese){
            cheese.quantity = 0;
        });
        angular.forEach(gameControl.menuItems.meat, function(meat){
            meat.quantity = 0;
        });
        angular.forEach(gameControl.menuItems.nuts, function(nuts){
            nuts.quantity = 0;
        });
    }

    gameControl.getButtonText = function(){
        if (gameControl.viewOrder == true) {
            return "Back"
        }
        else{
            return "View Order"
        }
    };

    gameControl.pressedOrder = function(){
        //gameControl.viewOrder = !gameControl.viewOrder
        var tempString = "<strong>Bread</strong>";
        angular.forEach(gameControl.menuItems.bread, function(bread){
            if (bread.quantity > 0) {
                tempString += "<br>"+bread.name + " x" + bread.quantity;
            }
        });
        tempString += "<br><strong>Spread</strong>"
         angular.forEach(gameControl.menuItems.spread, function(spread){
            if (spread.quantity > 0) {
                tempString += "<br>"+spread.name + " x" + spread.quantity;
            }
        });
         tempString += "<br><strong>Greens + Grains</strong>"
         angular.forEach(gameControl.menuItems.greens, function(greens){
            if (greens.quantity > 0) {
                tempString += "<br>"+greens.name + " x" + greens.quantity;
            }
        });
        tempString += "<br><strong>Veg</strong>"
         angular.forEach(gameControl.menuItems.veg, function(veg){
            if (veg.quantity > 0) {
                tempString += "<br>"+veg.name + " x" + veg.quantity;
            }
        }); 
        tempString += "<br><strong>Cheese</strong>"
         angular.forEach(gameControl.menuItems.cheese, function(cheese){
            if (cheese.quantity > 0) {
                tempString += "<br>"+cheese.name + " x" + cheese.quantity;
            }
        });  
        tempString += "<br><strong>Meat</strong>"
         angular.forEach(gameControl.menuItems.meat, function(meat){
            if (meat.quantity > 0) {
                tempString += "<br>"+meat.name + " x" + meat.quantity;
            }
        });  
        tempString += "<br><strong>Nuts</strong>"
         angular.forEach(gameControl.menuItems.nuts, function(nuts){
            if (nuts.quantity > 0) {
                tempString += "<br>"+nuts.name + " x" + nuts.quantity;
            }
        }); 
        tempString += "<br><br><strong>Total Price:</strong><br>R"+ gameControl.getTotalPrice();  
       console.log("pressed");
        var dialog = ngDialog.open({
            template: '<p>'+tempString+'</p>',
            plain: true
        });
        dialog.closePromise.then(function(data){
           console.log("Dismissed"); 
            //clearSelection();
        });
    };

    gameControl.notOrder = function(){
         if (gameControl.viewOrder == true) {
            return false
        }
        else{
            return true
        }
    }

    gameControl.order = function(){
         if (gameControl.viewOrder == true) {
            return true
        }
        else{
            return false
        }
    }

    gameControl.breadInOrder = function(){
        var addedBread = [];
        angular.forEach(gameControl.menuItems.bread, function(bread){
            if (bread.quantity > 0){
                addedBread.push(bread);
            }
        });
        return addedBread;
    };

    gameControl.shouldShow = function(data){

        console.log(data)
        return true
    };
    gameControl.testVariable = "HIHI"
    gameControl.showStart = true;
    gameControl.showGame = false;
    gameControl.players = [{name: "Wessel", role: "", selected: true}, {name: "Nina", role: "", selected: true}];
    
    gameControl.addPlayer = function(){
        if (gameControl.newPlayer != null){
             gameControl.players.push({name: gameControl.newPlayer, role: "", selected: true});
            gameControl.newPlayer = "";
        } 
    };
    
    gameControl.firstCard = "";
    gameControl.secondCard = "";
    gameControl.thirdCard = "";
    
    gameControl.roles = [{name: "Werewolf", selected: false},{name: "Werewolf", selected: false}, {name: "Minion", selected: false}, {name: "Mason", selected: false}, {name: "Mason", selected: false}, {name: "Seer", selected: false}, {name: "Robber", selected: false}, {name: "Troublemaker", selected: false}, {name: "Drunk", selected: false}, {name: "Insomniac", selected: false}, {name: "Villager", selected: false}, {name: "Villager", selected: false}, {name: "Villager", selected: false}, {name: "Hunter", selected: false}, {name: "Tanner", selected: false}];
    
    gameControl.selectedRoles = function(){
      var count = 0;
      angular.forEach(gameControl.roles, function(role){
         count += role.selected ? 1 : 0;
      });
      return count;    
    };
    
    gameControl.requiredRoles = function(){
        var count = 3;
        angular.forEach(gameControl.players, function(player){
           count += player.selected ? 1 : 0; 
        });
        return count;
    };
    
    gameControl.isReady = function(){
        if (gameControl.selectedRoles() == gameControl.requiredRoles()){
            return true;
        }
        else{
            return false;
        }
    };
    
    gameControl.actualPlayers = []
    
    gameControl.getSelectedRoles = function(){
        var roles = [];
        var players = [];
        var playerSplice = gameControl.players.slice(0);
        console.log(playerSplice);
        angular.forEach(gameControl.roles, function(role){
           if (role.selected == true){
               roles.push(role);
           } 
        });
        angular.forEach(playerSplice, function(player){
           if (player.selected == true){
               players.push({name:player.name, role: player.role, selected: false});
           } 
        });
        for (var i = 0; i < roles.length; i++){
            var ind = Math.floor(Math.random() * roles.length);
            var swap = roles[i];
            roles[i] = roles[ind];
            roles[ind] = swap;
        }
        for (var i = 0; i < players.length; i++){
            players[i].role = roles[i].name; 
           // players[i].selected = false;
        }
        console.log(roles[roles.length -1].name);
        console.log(roles[roles.length -2].name);
        console.log(roles[roles.length -3].name);
        players.push({name: "First Card", role: roles[roles.length -1].name, selected: false});
        players.push({name: "Second Card", role: roles[roles.length -2].name, selected: false});
        players.push({name: "Third Card", role: roles[roles.length -3].name, selected: false});
        gameControl.firstCard = roles[roles.length - 1];
        gameControl.secondCard = roles[roles.length - 2];
        gameControl.thirdCard = roles[roles.length - 3];

        return players;
    };
    
    gameControl.startGame = function(){
        if (gameControl.selectedRoles() == gameControl.requiredRoles()){
            gameControl.showStart = false;
            gameControl.showGame = true;
            gameControl.actualPlayers = gameControl.getSelectedRoles();
        }
      
       // console.log(gameControl.getSelectedRoles());
    
    };
    
    gameControl.getButtonClass = function(index){
      if (gameControl.actualPlayers[index].selected == true){
          return "btn-success";
      }  
        else{
            return "btn-warning";
        }
    };
    
    gameControl.selectPlayer = function(data){
        gameControl.actualPlayers[data].selected = !gameControl.actualPlayers[data].selected
        console.log(data);
    };
    
    gameControl.stopGame = function(){
        gameControl.showStart = true;
        gameControl.showGame = false;
    };
    
    gameControl.showButton = function(){
      var count = 0;
        angular.forEach(gameControl.actualPlayers, function(player){
           count += player.selected ? 1 : 0;
        });
        if (count > 0){
            return true;
        }
        else{
            return false;
        }              
    };
    
    gameControl.showSwitch = function(){
      var count = 0;
        angular.forEach(gameControl.actualPlayers, function(player){
           count += player.selected ? 1 : 0;
        });
        if (count == 2){
            return true;
        }
        else{
            return false;
        }         
    };
    
    gameControl.showButtonPressed = function(){
        var tempString = "";
        angular.forEach(gameControl.actualPlayers, function(player){
            if (player.selected == true){
                tempString += player.name + " is: " + player.role +"<br>";
            }
        });
       console.log("pressed");
        var dialog = ngDialog.open({
            template: '<p>'+tempString+'</p>',
            plain: true
        });
        dialog.closePromise.then(function(data){
           console.log("Dismissed"); 
            clearSelection();
        });
    };
    gameControl.switchButtonPressed = function(){
        var temp = [];
        var tempString = "";
        angular.forEach(gameControl.actualPlayers, function(player){
            if (player.selected == true){
                //tempString += player.name + " is: " + player.role +"<br>";
                temp.push(player);
            }
        });
        var tempRole = temp[0].role;
        temp[0].role = temp[1].role;
        temp[1].role = tempRole;
        tempString = "Switched " + temp[0].name +" and " + temp[1].name;
        var dialog = ngDialog.open({
            template: '<p>'+tempString+'</p>',
            plain: true
        });
        
         dialog.closePromise.then(function(data){
           console.log("Dismissed"); 
             clearSelection();
        });
    };
    
    function clearSelection(){
        console.log("pressed clear");
        angular.forEach(gameControl.actualPlayers, function(player){
            player.selected = false;
        });
    }
    
    gameControl.getRoleButtonClass = function(index){
        if (gameControl.roles[index].selected == true){
          return "btn-success";
      }  
        else{
            return "btn-warning";
        }
    };
    
     gameControl.roleButtonClicked = function(index){
        gameControl.roles[index].selected = !gameControl.roles[index].selected
       // console.log(data);
    };
    
  });