document.addEventListener("DOMContentLoaded", function() {
  /**
   * Form Select
   */
  class FormSelect {
    constructor($el) {
      this.$el = $el;
      this.options = [...$el.children];
      this.init();
    }

    init() {
      this.createElements();
      this.addEvents();
      this.$el.parentElement.removeChild(this.$el);
    }

    createElements() {
      // Input for value
      this.valueInput = document.createElement("input");
      this.valueInput.type = "text";
      this.valueInput.name = this.$el.name;

      // Dropdown container
      this.dropdown = document.createElement("div");
      this.dropdown.classList.add("dropdown");

      // List container
      this.ul = document.createElement("ul");

      // All list options
      this.options.forEach((el, i) => {
        const li = document.createElement("li");
        li.dataset.value = el.value;
        li.innerText = el.innerText;

        if (i === 0) {
          // First clickable option
          this.current = document.createElement("div");
          this.current.innerText = el.innerText;
          this.dropdown.appendChild(this.current);
          this.valueInput.value = el.value;
          li.classList.add("selected");
        }

        this.ul.appendChild(li);
      });

      this.dropdown.appendChild(this.ul);
      this.dropdown.appendChild(this.valueInput);
      this.$el.parentElement.appendChild(this.dropdown);
    }

    addEvents() {
      this.dropdown.addEventListener("click", e => {
        const target = e.target;
        this.dropdown.classList.toggle("selecting");

        // Save new value only when clicked on li
        if (target.tagName === "LI") {
          this.valueInput.value = target.dataset.value;
          this.current.innerText = target.innerText;
        }
      });
    }
  }
  document.querySelectorAll(".form-group--dropdown select").forEach(el => {
    new FormSelect(el);
  });

  /**
   * Hide elements when clicked on document
   */
  document.addEventListener("click", function(e) {
    const target = e.target;
    const tagName = target.tagName;

    if (target.classList.contains("dropdown")) return false;

    if (tagName === "LI" && target.parentElement.parentElement.classList.contains("dropdown")) {
      return false;
    }

    if (tagName === "DIV" && target.parentElement.classList.contains("dropdown")) {
      return false;
    }

    document.querySelectorAll(".form-group--dropdown .dropdown").forEach(el => {
      el.classList.remove("selecting");
    });
  });

  /**
   * Switching between form steps
   */
  class FormSteps {
    constructor(form) {
      this.$form = form;
      this.$next = form.querySelectorAll(".next-step");
      this.$prev = form.querySelectorAll(".prev-step");
      this.$step = form.querySelector(".form--steps-counter span");
      this.currentStep = 1;

      this.$stepInstructions = form.querySelectorAll(".form--steps-instructions p");
      const $stepForms = form.querySelectorAll("form > div");
      this.slides = [...this.$stepInstructions, ...$stepForms];

      this.donationData = {};

      this.init();
    }

    /**
     * Init all methods
     */
    init() {
      this.events();
      this.updateForm();
    }

    /**
     * All events that are happening in form
     */
    events() {
      // Next step
      this.$next.forEach(btn => {
        btn.addEventListener("click", e => {
          e.preventDefault();
          this.saveCurrentStepData();
          this.currentStep++;
          this.updateForm();
        });
      });

      // Previous step
      this.$prev.forEach(btn => {
        btn.addEventListener("click", e => {
          e.preventDefault();
          this.currentStep--;
          this.updateForm();
        });
      });

      // Form submit
      this.$form.querySelector("form").addEventListener("submit", e => this.submit(e));
    }

    /**
     * Save data from the current step
     */
    saveCurrentStepData() {
      const currentStep = this.currentStep;
      if (currentStep === 2) {
        this.donationData.quantity = document.getElementById("quantity").value;
      }
      if (currentStep === 3) {
        const selectedInstitution = document.querySelector(".institution-radio:checked");
        this.donationData.institution = selectedInstitution ? selectedInstitution.closest("label").querySelector(".title").innerText : "";
      }
      if (currentStep === 4) {
        this.donationData.street = document.getElementById("street").value;
        this.donationData.city = document.getElementById("city").value;
        this.donationData.zipCode = document.getElementById("zipCode").value;
        this.donationData.phone = document.getElementById("phone").value;
        this.donationData.pickUpDate = document.getElementById("pickUpDate").value;
        this.donationData.pickUpTime = document.getElementById("pickUpTime").value;
        this.donationData.pickUpComment = document.getElementById("pickUpComment").value;
      }
    }

    /**
     * Update form front-end
     * Show next or previous section etc.
     */
    updateForm() {
      this.$step.innerText = this.currentStep;

      this.slides.forEach(slide => {
        slide.classList.remove("active");

        if (slide.dataset.step == this.currentStep) {
          slide.classList.add("active");
        }
      });

      this.$stepInstructions[0].parentElement.parentElement.hidden = this.currentStep >= 5;
      this.$step.parentElement.hidden = this.currentStep >= 5;

      if (this.currentStep === 5) {
        this.updateSummary();
      }
    }

    /**
     * Update the summary with the collected data
     */
    updateSummary() {
      document.getElementById("summaryQuantity").innerText = `${this.donationData.quantity} worki/ów darów.`;
      document.getElementById("summaryInstitution").innerText = `Dla fundacji ${this.donationData.institution}`;
      const address = document.getElementById("summaryAddress");
      address.children[0].innerText = this.donationData.street;
      address.children[1].innerText = this.donationData.city;
      address.children[2].innerText = this.donationData.zipCode;
      address.children[3].innerText = this.donationData.phone;
      const pickup = document.getElementById("summaryPickup");
      pickup.children[0].innerText = this.donationData.pickUpDate;
      pickup.children[1].innerText = this.donationData.pickUpTime;
      pickup.children[2].innerText = this.donationData.pickUpComment;
    }

    /**
     * Form submission
     */
    submit(e) {
      // Implement any necessary form validation and submission handling here
    }
  }
  const form = document.querySelector(".form--steps");
  if (form !== null) {
    new FormSteps(form);
  }
});
