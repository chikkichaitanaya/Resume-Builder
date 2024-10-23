function generateResume() {
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const education = document.getElementById('education').value;
  const experience = document.getElementById('experience').value;
  const skills = document.getElementById('skills').value;

  // Display the values in the resume preview
  document.getElementById('preview-name').innerText = name;
  document.getElementById('preview-email').innerText = email;
  document.getElementById('preview-phone').innerText = phone;
  document.getElementById('preview-address').innerText = address;
  document.getElementById('preview-education').innerText = education;
  document.getElementById('preview-experience').innerText = experience;
  document.getElementById('preview-skills').innerText = skills;
  
}
function exportPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const name = document.getElementById('preview-name').innerText;
  const email = document.getElementById('preview-email').innerText;
  const phone = document.getElementById('preview-phone').innerText;
  const address = document.getElementById('preview-address').innerText;
  const education = document.getElementById('preview-education').innerText;
  const experience = document.getElementById('preview-experience').innerText;
  const skills = document.getElementById('preview-skills').innerText;

  doc.text(`Name: ${name}`, 10, 10);
  doc.text(`Email: ${email}`, 10, 20);
  doc.text(`Phone: ${phone}`, 10, 30);
  doc.text(`Address: ${address}`, 10, 40);
  doc.text(`Education: ${education}`, 10, 50);
  doc.text(`Experience: ${experience}`, 10, 60);
  doc.text(`Skills: ${skills}`, 10, 70);

  doc.save("resume.pdf");
}

