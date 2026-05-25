const PDFDocument = require('pdfkit');
const fs = require('fs');

const portfolioData = JSON.parse(fs.readFileSync('./src/data/portfolio.json', 'utf8'));

function generatePDF() {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument({ margin: 50 });

        const writeStream = fs.createWriteStream('./public/Waiz_Tahseen_Resume.pdf');
        doc.pipe(writeStream);

        // Header
        doc.fontSize(24).font('Helvetica-Bold').text(portfolioData.personal.name, { align: 'center' });
        doc.moveDown(0.2);
        doc.fontSize(12).font('Helvetica').fillColor('#555555').text(`${portfolioData.personal.role} | ${portfolioData.personal.experience} Experience`, { align: 'center' });
        doc.moveDown(1.5);

        // Professional Summary
        doc.fontSize(16).font('Helvetica-Bold').fillColor('#000000').text('Professional Summary');
        doc.moveTo(50, doc.y).lineTo(550, doc.y).strokeColor('#cccccc').stroke();
        doc.moveDown(0.5);
        doc.fontSize(10).font('Helvetica').fillColor('#333333').text(portfolioData.personal.bio, { align: 'justify' });
        doc.moveDown(1.5);

        // Experience
        doc.fontSize(16).font('Helvetica-Bold').fillColor('#000000').text('Experience');
        doc.moveTo(50, doc.y).lineTo(550, doc.y).strokeColor('#cccccc').stroke();
        doc.moveDown(0.5);

        portfolioData.experience.forEach(exp => {
            doc.fontSize(12).font('Helvetica-Bold').text(`${exp.role} at ${exp.company}`);
            doc.fontSize(10).font('Helvetica-Oblique').fillColor('#666666').text(exp.period);
            doc.moveDown(0.2);
            doc.font('Helvetica').fillColor('#333333').text(exp.description);
            doc.moveDown();
        });

        // Projects
        doc.fontSize(16).font('Helvetica-Bold').fillColor('#000000').text('Key Projects');
        doc.moveTo(50, doc.y).lineTo(550, doc.y).strokeColor('#cccccc').stroke();
        doc.moveDown(0.5);

        portfolioData.projects.forEach(proj => {
            doc.fontSize(12).font('Helvetica-Bold').text(proj.title);
            doc.fontSize(10).font('Helvetica-Oblique').fillColor('#666666').text(`${proj.category} | ${proj.techStack.join(', ')}`);
            doc.moveDown(0.2);
            doc.font('Helvetica').fillColor('#333333').text(proj.description);
            doc.moveDown();
        });

        // Skills
        doc.fontSize(16).font('Helvetica-Bold').fillColor('#000000').text('Technical Skills');
        doc.moveTo(50, doc.y).lineTo(550, doc.y).strokeColor('#cccccc').stroke();
        doc.moveDown(0.5);

        doc.fontSize(10).font('Helvetica-Bold').text('Frontend: ', { continued: true }).font('Helvetica').text(portfolioData.skills.frontend.join(', '));
        doc.moveDown(0.3);
        doc.fontSize(10).font('Helvetica-Bold').text('Backend: ', { continued: true }).font('Helvetica').text(portfolioData.skills.backend.join(', '));
        doc.moveDown(0.3);
        doc.fontSize(10).font('Helvetica-Bold').text('Database: ', { continued: true }).font('Helvetica').text(portfolioData.skills.database.join(', '));
        doc.moveDown(0.3);
        doc.fontSize(10).font('Helvetica-Bold').text('Other: ', { continued: true }).font('Helvetica').text(portfolioData.skills.other.join(', '));

        doc.end();

        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
    });
}

generatePDF()
    .then(() => console.log('PDF generated successfully!'))
    .catch(console.error);
