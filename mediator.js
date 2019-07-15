function Company(companyName) {
  this.companyName = companyName;
  this.agent = null;
}
Company.prototype = {
  makeOrder: function (partner, order) {
    this.agent.makeDeal(partner, order, this);
  },
  acceptOrder: function (partner) {
    console.log(partner.order + " accepted from " + partner.companyName);
  }
}
function Agent() {
  var companies = {};

  return {
    makeDeal: function (company, order) {
      company.agent = this;
      companies[company.companyName] = company;
      companies[company.order] = order;

    },
    acceptOrder: function (order, from, to) {
      to.acceptOrder(order, from, to)
    }
  }
}

var agent = new Agent();
var appleFarm = new Company("Farm");
var juiceFactory = new Company("Juice Factory");
var shop = new Company("Juice shop");
agent.makeDeal(appleFarm);
agent.makeDeal(juiceFactory);
agent.makeDeal(shop);

juiceFactory.makeOrder("Two tracks of apples", appleFarm);


