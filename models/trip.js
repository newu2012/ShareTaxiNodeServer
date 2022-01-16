class Trip {
    constructor(id, costOverall, creatorId, currentCompanions, departureTime, fromPointAddress,
                maximumCompanions, title, toPointAddress,) {
        this.id = id;
        this.costOverall = costOverall;
        this.creatorId = creatorId;
        this.currentCompanions = currentCompanions;
        this.departureTime = departureTime;
        this.fromPointAddress = fromPointAddress;
        this.maximumCompanions = maximumCompanions;
        this.toPointAddress = toPointAddress;
    }
}

module.exports = Trip;