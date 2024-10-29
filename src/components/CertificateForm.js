// Import necessary hooks and components
import { useState } from 'react'; // useState is a React hook that allows us to add state to functional components
import { TextField, Button, Container, createTheme, ThemeProvider } from '@mui/material'; // Import Material UI components for styling and layout
import Certificate from './Certificate'; // Import the Certificate component (to display the certificate)
import html2canvas from 'html2canvas'; // Import html2canvas to convert HTML elements into canvas images
import jsPDF from 'jspdf'; // Import jsPDF to generate PDF files

// Define the custom theme for Material UI components
const theme = createTheme({
    palette: {
      background: {
        default: '#121212',  // Background color
      },
      primary: {
        main: '#414141',      // Button color
      },
      text: {
        primary: '#888888',   // Field text color
      },
    },
    typography: {
      fontFamily: 'Space Grotesk, sans-serif', // Font family for entire app
    },
  });

// The functional component CertificateForm handles form inputs and PDF generation
const CertificateForm = () => {

  // useState is used to manage form data for certificate fields (name, description, ID, and date)
    const [formData, setFormData] = useState({
    name: '',            // User's name
    description: '',
    certificateId: '',    // Certificate ID
    date: '',             // Date of the certificate
    });

  // This function handles changes in the input fields
    const handleChange = (e) => {
    // Spread operator (...) to keep existing formData, and update only the changed field
        setFormData({
            ...formData,
            [e.target.name]: e.target.value, // Dynamically update the formData based on the input's name attribute
        });
    };

  // This function generates a PDF from the certificate displayed in the browser
    const downloadPDF = () => {
        const certificateElement = document.getElementById('certificate'); // Get the certificate element by its ID
        html2canvas(certificateElement, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
        
            // Get the size of the certificate element
            const pdfWidth = canvas.width * 0.264583; // Convert px to mm
            const pdfHeight = canvas.height * 0.264583; // Convert px to mm
        
            // Create jsPDF document in landscape or portrait based on size
            const orientation = pdfWidth > pdfHeight ? 'landscape' : 'portrait';
            const pdf = new jsPDF(orientation, 'mm', [pdfWidth, pdfHeight]);
        
            // Add the image to the PDF
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        
            // Save the generated PDF
            pdf.save('certificate.pdf');
          });
    };

    return (
        <ThemeProvider theme={theme}>
        <Container style={{ backgroundColor: '#121212', padding: '20px', borderRadius: '8px' }}>
            {/* Text field for the user's name */}
            <TextField
            name="name" // The name attribute links this input to the formData.name field
            label="Name" // The label for the input field
            onChange={handleChange} // Call handleChange when the input value changes
            fullWidth // Make the input take up the full width of the container
            margin="normal" // Add margin to space out the input field
            variant="filled"
          InputProps={{
            style: { backgroundColor: '#1e1e1e', color: '#888888' },
          }}
          InputLabelProps={{
            style: { color: '#888888' },
          }}
            />

            <TextField
                name="description"
                label="Certificate Description"
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="filled"
          InputProps={{
            style: { backgroundColor: '#1e1e1e', color: '#888888' },
          }}
          InputLabelProps={{
            style: { color: '#888888' },
          }}
            />
            
            {/* Text field for the certificate ID */}
            <TextField
            name="certificateId"
            label="Certificate ID"
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="filled"
          InputProps={{
            style: { backgroundColor: '#1e1e1e', color: '#888888' },
          }}
          InputLabelProps={{
            style: { color: '#888888' },
          }}
            />
            {/* Text field for the date (input type is 'date') */}
            <TextField
            name="date"
            label="Date"
            type="date"
            value={formData.date}   // Ensure this is correctly bound to formData
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="filled"
          InputProps={{
            style: { backgroundColor: '#1e1e1e', color: '#888888' },
          }}
          InputLabelProps={{
            shrink: true,
            style: { color: '#888888' },
          }}
            />

            {/* Button to trigger the downloadPDF function */}
            <Button
            variant="contained" // Material UI variant for a filled button style
            onClick={downloadPDF} // Call the downloadPDF function when clicked
            style={{
                marginTop: '20px',
                backgroundColor: '#414141',
                color: '#fefefe',
                borderRadius: '8px',
                padding: '10px 20px',
              }}
            >
            Download PDF
            </Button>

            {/* Render the Certificate component, passing in the formData as props */}
            <Certificate {...formData} />
        </Container>
        </ThemeProvider>
    );
};

export default CertificateForm; // Export the component to be used in other parts of the app
