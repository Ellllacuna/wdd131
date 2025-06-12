let participantCount = 1;

document.getElementById('add').addEventListener('click', function () {
    participantCount++;
    participantTemplate(participantCount);
});

function participantTemplate(count) {
    const participantContainer = document.querySelector('.participants');

    const section = document.createElement('section');
    section.className = 'participant${count}';

    section.innerHTML =  `
            <p>Participant ${count}</p>
            <div class="item">
              <label for="fname${count}"> First Name<span>*</span></label>
              <input id="fname${count}" type="text" name="fname${count}" value="" required="">
            </div>
            <div class="item activities">
              <label for="activity${count}">Activity #<span>*</span></label>
              <input id="activity${count}" type="text" name="activity${count}">
            </div>
            <div class="item">
              <label for="fee${count}">Fee ($)<span>*</span></label>
              <input id="fee${count}" type="number" name="fee${count}">
            </div>
            <div class="item">
              <label for="date${count}">Desired Date <span>*</span></label>
              <input id="date${count}" type="date" name="date${count}">
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected="" value="" disabled=""></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>
          `;

    participantContainer.appendChild(section);
}

const form = document.querySelector('form');
const summary = document.getElementById('summary');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const fees = totalFees();

    const adultName = document.getElementById('adult_name').value.trim();

    const participantSections = document.querySelectorAll('.participants section');
    const participantCount = participantSections.length;

    form.style.display = 'none';
    summary.style.display = "block";

    summary.textContent = `Thank you for registering ${adultName}. You have registered ${participantCount} participant(s) and owe $${fees.toFixed(2)} in Fees.`
});

function totalFees() {
     const feeInput = document.querySelectorAll('input[name^=fee]');
    let total = 0;
    feeInput.forEach(input => {
        total += parseFloat(input.value) || 0;
        //if i accidently put a word in the fee box, will default to adding 0
    })
    return total;
}