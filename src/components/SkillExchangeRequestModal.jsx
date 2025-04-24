import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useAuth } from "../context/AuthContext";

const SkillExchangeRequestModal = ({
  open,
  onClose,
  onSendRequest,
  targetUserId,
}) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    skillsToLearn: "",
    skillsToTeach: "",
  });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.skillsToLearn.trim()) {
      newErrors.skillsToLearn = "Skills to learn are required";
    }
    if (!formData.skillsToTeach.trim()) {
      newErrors.skillsToTeach = "Skills to teach are required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      // Check if user is trying to send request to themselves
      if (user.id === targetUserId) {
        setSubmitError("You cannot send a request to yourself");
        return;
      }

      await onSendRequest({
        ...formData,
        senderId: user.id,
        targetUserId,
      });

      // Reset form and close modal
      setFormData({ skillsToLearn: "", skillsToTeach: "" });
      setErrors({});
      setSubmitError("");
      onClose();
    } catch (error) {
      setSubmitError(error.message || "Failed to send request");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Send Skill Exchange Request</DialogTitle>
      <DialogContent>
        {submitError && (
          <Alert severity="error" className="mb-4">
            {submitError}
          </Alert>
        )}
        <div className="space-y-4 mt-4">
          <TextField
            fullWidth
            label="Skills I Want to Learn"
            name="skillsToLearn"
            value={formData.skillsToLearn}
            onChange={handleChange}
            error={!!errors.skillsToLearn}
            helperText={errors.skillsToLearn}
            multiline
            rows={3}
            placeholder="Enter the skills you want to learn (e.g., React, Python, UI Design)"
          />
          <TextField
            fullWidth
            label="Skills I Can Teach"
            name="skillsToTeach"
            value={formData.skillsToTeach}
            onChange={handleChange}
            error={!!errors.skillsToTeach}
            helperText={errors.skillsToTeach}
            multiline
            rows={3}
            placeholder="Enter the skills you can teach in return (e.g., JavaScript, Data Analysis, Project Management)"
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Send Request
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SkillExchangeRequestModal;
