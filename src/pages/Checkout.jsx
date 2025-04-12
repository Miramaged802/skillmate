import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Typography,
  Box,
  Container,
  Paper,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import { CreditCard } from "lucide-react";
import { ExchangeContext } from "../context/ExchangeContext";

const Checkout = () => {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const { exchangeSessions, addOrder } = useContext(ExchangeContext);
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const session = exchangeSessions.find((s) => s.id === sessionId);

  if (!session) {
    return <Typography>Session not found</Typography>;
  }

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value,
    });
  };

  const handleCheckout = () => {
    // Save order
    addOrder({
      sessionId: session.id,
      title: session.title,
      instructor: session.instructor,
      price: session.price,
      duration: session.duration,
    });
    // Simulate payment processing
    console.log("Processing payment:", paymentData, "for session:", session);
    setShowAlert(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Paper sx={{ p: 4, borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Checkout
          </Typography>
          <Divider sx={{ mb: 4 }} />
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            gap={4}
          >
            <Box flex={1}>
              <Typography variant="h6" gutterBottom>
                Session Details
              </Typography>
              <Typography variant="subtitle1" fontWeight={600}>
                {session.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Instructor: {session.instructor}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Duration: {session.duration}
              </Typography>
              <Typography variant="h6" mt={2}>
                Total: ${session.price}
              </Typography>
            </Box>
            <Box flex={1}>
              <Typography variant="h6" gutterBottom>
                Payment Information
              </Typography>
              <TextField
                fullWidth
                label="Card Number"
                name="cardNumber"
                value={paymentData.cardNumber}
                onChange={handlePaymentChange}
                variant="outlined"
                margin="dense"
                placeholder="1234 5678 9012 3456"
              />
              <Box display="flex" gap={2}>
                <TextField
                  fullWidth
                  label="Expiry (MM/YY)"
                  name="expiry"
                  value={paymentData.expiry}
                  onChange={handlePaymentChange}
                  variant="outlined"
                  margin="dense"
                  placeholder="MM/YY"
                />
                <TextField
                  fullWidth
                  label="CVV"
                  name="cvv"
                  value={paymentData.cvv}
                  onChange={handlePaymentChange}
                  variant="outlined"
                  margin="dense"
                  placeholder="123"
                />
              </Box>
              <Button
                variant="contained"
                color="primary"
                startIcon={<CreditCard />}
                fullWidth
                sx={{ mt: 3, py: 1.5, fontWeight: "bold", borderRadius: "8px" }}
                onClick={handleCheckout}
                disabled={
                  !paymentData.cardNumber ||
                  !paymentData.expiry ||
                  !paymentData.cvv
                }
              >
                Complete Payment
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Payment successful! Redirecting to Dashboard...
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Checkout;
