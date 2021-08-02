// Convert Kilometer To Meter
function kilometerToMeter (kilometer) {
    if (0 <= kilometer) {
        var meter = (kilometer * 1000);
        return meter;
    }
    else {
        return "Please Enter the positive Value.";
    }
}
var result = kilometerToMeter(5);
console.log(result);


// Budget Caltulator
function budgetCalculator (watch, mobile, laptop) {
    if (0 <= watch) {

        var watchCost = watch * 50;

        if (0 <= mobile) {
            
            var mobileCost = mobile * 100;

            if (0 <= laptop) {
                
                var laptopCost = laptop * 500;
                var totalCost = watchCost + mobileCost + laptopCost;
                return totalCost;
            }

            else {
                return "Please Enter the positive Value.";
            }
        }
        else {
            return "Please Enter the positive Value.";
        }
    }
    else {
        return "Please Enter the positive Value.";
    }
}

var result = budgetCalculator(0, 5, 1);
console.log(result);



// Hotel Cost

function hotelCost(day) {
    
    var totalCost = 0;

    if (day > 0 && day <= 10) {
        var totalCost = day * 100;
        return totalCost;
    }

    else if (day > 10 && day <= 20) {
        var firstTenDayCost = 10 * 100;
        var remainDay = day - 10;
        var remainDayCost = remainDay * 80;
        var totalCost = firstTenDayCost + remainDayCost;
        return totalCost;
    }
        
    else if (day >= 21) {
        var firstTenDayCost = 10 * 100;
        var secondTenDayCost = 10 * 80;
        var remainDay = day - 20;
        var remainDayCost = remainDay * 50;
        var totalCost = firstTenDayCost + secondTenDayCost + remainDayCost;
        return totalCost;
    }
    else {
        return "Please enter higher value then 0(Zero).";
    }
}

var result = hotelCost(14);
console.log(result);


// mega Friend 

function megaFriend(friends) {
    
    var megaName = friends[0];
    
    for (var i = 0; i < friends.length; i++) {

        var currentFriend = friends[i];

        if ( currentFriend.length > megaName.length) {
            megaName =  currentFriend;
        }
    }
    return megaName;  
}

var result = megaFriend(['Rafiq', 'Jabbar', 'Shetara', 'Nipu', 'Kolimuddin', 'Mim']);
console.log(result);