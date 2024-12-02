class FP {
  constructor(first, last, houseMembers, houseSize, foodChoice, foodSource, housePurchases, waterConsumption, hasBoth) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice;
    this.foodSource = foodSource;
    this.housePurchasesPoints = housePurchases;
    this.waterConsumptionPoints = waterConsumption;
    this.hasBoth = hasBoth;
    this.calculateHouseholdPoints();
    this.calculateHomeSizePoints();
    this.calculateFoodPoints();
    this.calculateFoodSourcePoints();
    this.calculatePurchasePoints();
    this.calculateWaterPoints();
    this.calculateTotal();
  }

  calculateHouseholdPoints() {
    if (this.houseMembers === 1) {
      this.householdPoints = 14;
    } else if (this.houseMembers === 2) {
      this.householdPoints = 12;
    } else if (this.houseMembers === 3) {
      this.householdPoints = 10;
    } else if (this.houseMembers === 4) {
      this.householdPoints = 8;
    } else if (this.houseMembers === 5) {
      this.householdPoints = 6;
    } else if (this.houseMembers === 6) {
      this.householdPoints = 4;
    } else if (this.houseMembers > 6) {
      this.householdPoints = 2;
    }
  }

  calculateHomeSizePoints() {
    if (this.houseSize === "large") {
      this.houseSizePoints = 10;
    } else if (this.houseSize === "medium") {
      this.houseSizePoints = 7;
    } else if (this.houseSize === "small") {
      this.houseSizePoints = 4;
    } else if (this.houseSize === "apt") {
      this.houseSizePoints = 2;
    }
  }

  calculateFoodPoints() {
    if (this.foodChoice === "daily_meat") {
      this.foodPoints = 10;
    } else if (this.foodChoice === "weekly_meat") {
      this.foodPoints = 8;
    } else if (this.foodChoice === "vegetarian") {
      this.foodPoints = 4;
    } else if (this.foodChoice === "vegan_wild_meat") {
      this.foodPoints = 2;
    }
  }

  calculateFoodSourcePoints() {
    if (this.foodSource === "packed") {
      this.foodSourcePoints = 12;
    } else if (this.foodSource === "balance") {
      this.foodSourcePoints = 6;
    } else if (this.foodSource === "local") {
      this.foodSourcePoints = 2;
    }
  }

  calculatePurchasePoints() {
    this.purchasePoints = this.housePurchasesPoints;
  }

  calculateWaterPoints() {
    if (this.hasBoth) {
      this.totalWaterPoints = this.waterConsumptionPoints * 2;
    } else {
      this.totalWaterPoints = this.waterConsumptionPoints;
    }
  }

  calculateTotal() {
    this.total =
      this.householdPoints +
      this.houseSizePoints +
      this.foodPoints +
      this.foodSourcePoints +
      this.purchasePoints +
      this.totalWaterPoints;
  }
}

export { FP };

