// required attribute 






const inputerror = document.querySelectorAll('[required]');
console.log("called");
inputerror.forEach((inputs) => {
    // console.log(ReQuired);
    inputs.addEventListener("blur", function () {
        let error = document.createElement("span");
        const errormsg = document.createTextNode("this field is required");
        error.appendChild(errormsg);
        // console.log(this.value);
        if (this.value == "") {
            console.log(this.nextSibling.nodeName);
            if (this.nextSibling.nodeName == "SPAN") {
                console.log(this.nextSibling.remove());                    
                this.nextSibling.remove()
            } else {
                this.after(error)
            }
            // this.after(p)

        } else {
            console.log(this.nextSibling.remove());

        }
    })
});
console.log("called");

