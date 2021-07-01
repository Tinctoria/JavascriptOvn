//Del4 Klasser och objekt 

// House klassen: 
class House{
    constructor(){
        this.house=[];
    }

    //funktion som pushar in någonting i husets array
    addRoom(x) {
        this.house.push(x);
    }

    //funktion som skapar en array av alla objekt som finns i husets array. 
    getAllRooms() {
        const allRooms = [];
        this.house.forEach(el => allRooms.push(el));
        return allRooms;
    }
}; 

// Room klassen:
class Room{
    constructor(roomType){
        this.roomType=roomType; 
    }
}; 


//Skapa ett nytt hus genom att anropa classen. 
const myHouse = new House();

//Lägg till rum
myHouse.addRoom(new Room("Bedroom")); 
myHouse.addRoom(new Room("Living room")); 
myHouse.addRoom(new Room("Bathroom")); 

//Skapar en array med rummen i mitt hus 
const myRooms = myHouse.getAllRooms();

//loopa igenom arrayen och console.logga ut varje rumstyp. 
myRooms.forEach(room=>console.log(room.roomType));



