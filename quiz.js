const workers = [
    {name : "Jeme Akhter", hourlyRate: 9.65, hoursWorked: 70},
    {name : "Nijhum Jawad", hourlyRate: 8.55, hoursWorked: 80},
    {name : "Anu Rahman", hourlyRate: 8.75, hoursWorked: 59},
]

class Payroll{
    constructor(workers){
        this.workers = workers;
        this.name = this.getNames();
        this.hoursWorked = this.getFullTime();
        this.totalCost = this.getTotalLabour();
    }
    getNames(){
        const newarray = this.workers.map(worker =>{
            return worker.name;
     
        })
     return newarray.sort();
     
     }
    getFullTime(){
        const work = workers.filter(worker => worker.hoursWorked > 60)
        // console.log(work)
        return work;
    }
    getTotalLabour() {
            return this.workers.reduce((acc, curr) => {
                    return (acc + curr.hoursWorked * curr.hourlyRate);
            }, 0)
     }
}

const worker = new Payroll(workers);
console.log(worker.name);
console.log(worker.hoursWorked);
console.log(worker.totalCost);