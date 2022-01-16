class Message {
    constructor(id, args, date, isSystem, text, tripId, userId,) {
        this.id = id;
        this.args = args;
        this.date = date;
        this.isSystem = isSystem;
        this.text = text;
        this.tripId = tripId;
        this.userId = userId;
    }
}

module.exports = Message;