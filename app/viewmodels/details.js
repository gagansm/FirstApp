define(['knockout',
        'durandal/app'
],
function (ko,
          
          ) {
    function MyViewModel() {
        var self = this;

        self.dailyExpenses = ko.observableArray();
        self.expense = ko.observable({ category: 'grocery', rate: 100 });


        loadData();
        function loadData() {
            for (var i = 0; i < 5; i++) {
                self.dailyExpenses.push(self.expense);
            }
        }

        

    }
    MyViewModel.prototype.constructor = MyViewModel;
    return MyViewModel;

});
