import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Chip,
  IconButton,
  Button,
  Divider,
  Tabs,
  Tab,
  CircularProgress,
  Alert,
  Snackbar,
  Collapse,
  Tooltip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Copy,
  CheckCircle,
  Clock,
  AlertCircle,
  MessageSquare,
  Phone,
  Video,
  Share2,
  Download,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Globe,
  Shield,
  Zap,
  File,
  Calendar,
  User,
  Info,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext";
import { useWebSocket } from "../hooks/useWebSocket";
import { useOfflineQueue } from "../hooks/useOfflineQueue";
import RequestHeader from "../components/request/RequestHeader";
import RequestTimeline from "../components/request/RequestTimeline";
import RequestPricing from "../components/request/RequestPricing";
import CommunicationHub from "../components/request/CommunicationHub";
import ConnectionStatus from "../components/request/ConnectionStatus";
import ErrorBoundary from "../components/common/ErrorBoundary";

const RequestDetails = () => {
  const { requestId } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { t, i18n } = useTranslation();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState(0);
  const [expandedSections, setExpandedSections] = useState({});
  const [showSnackbar, setShowSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [requestData, setRequestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [connectionQuality, setConnectionQuality] = useState("good");
  const [isOffline, setIsOffline] = useState(false);

  // WebSocket connection
  const { sendMessage, lastMessage, readyState } = useWebSocket(
    `ws://your-websocket-server/requests/${requestId}`
  );

  // Offline queue for messages
  const { queue, addToQueue, processQueue } = useOfflineQueue();

  // Auto-scroll refs
  const chatContainerRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const fetchRequestDetails = async () => {
      try {
        setLoading(true);
        // Simulated API call - replace with actual API endpoint
        const response = await fetch(`/api/requests/${requestId}`);
        const data = await response.json();
        setRequestData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequestDetails();
  }, [requestId]);

  useEffect(() => {
    // Handle WebSocket messages
    if (lastMessage) {
      // Process incoming messages
      handleIncomingMessage(lastMessage);
    }
  }, [lastMessage]);

  const handleIncomingMessage = (message) => {
    // Process different types of messages
    switch (message.type) {
      case "status_update":
        setRequestData((prev) => ({
          ...prev,
          status: message.status,
          lastUpdated: message.timestamp,
        }));
        break;
      case "chat_message":
        // Handle chat messages
        break;
      case "call_status":
        // Handle call status updates
        break;
      default:
        break;
    }
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCopyRequestId = () => {
    navigator.clipboard.writeText(requestId);
    setShowSnackbar({
      open: true,
      message: t("request.idCopied"),
      severity: "success",
    });
  };

  const handleRetry = () => {
    setError(null);
    // Retry the failed operation
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={3}>
        <Alert
          severity="error"
          action={
            <Button color="inherit" size="small" onClick={handleRetry}>
              {t("common.retry")}
            </Button>
          }
        >
          {error}
        </Alert>
      </Box>
    );
  }

  return (
    <ErrorBoundary>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          direction: i18n.dir(),
        }}
      >
        {/* Connection Status Bar */}
        <ConnectionStatus
          quality={connectionQuality}
          isOffline={isOffline}
          onRetry={() => processQueue()}
        />

        {/* Main Content */}
        <Box
          sx={{
            maxWidth: 1200,
            mx: "auto",
            p: { xs: 2, md: 4 },
          }}
        >
          {/* Request Header */}
          <RequestHeader
            requestId={requestId}
            status={requestData?.status}
            createdAt={requestData?.createdAt}
            lastUpdated={requestData?.lastUpdated}
            serviceType={requestData?.serviceType}
            onCopyId={handleCopyRequestId}
          />

          {/* Main Grid Layout */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" },
              gap: 3,
              mt: 3,
            }}
          >
            {/* Left Column - Details and Communication */}
            <Box>
              {/* Request Timeline */}
              <Paper sx={{ p: 3, mb: 3 }}>
                <RequestTimeline
                  milestones={requestData?.timeline}
                  ref={timelineRef}
                />
              </Paper>

              {/* Communication Hub */}
              <Paper sx={{ p: 3 }}>
                <CommunicationHub
                  requestId={requestId}
                  activeTab={activeTab}
                  onTabChange={handleTabChange}
                  onSendMessage={sendMessage}
                  chatContainerRef={chatContainerRef}
                />
              </Paper>
            </Box>

            {/* Right Column - Pricing and Details */}
            <Box>
              {/* Pricing Breakdown */}
              <Paper sx={{ p: 3, mb: 3 }}>
                <RequestPricing
                  pricing={requestData?.pricing}
                  paymentStatus={requestData?.paymentStatus}
                />
              </Paper>

              {/* Additional Details */}
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {t("request.additionalDetails")}
                </Typography>
                <Divider sx={{ my: 2 }} />
                {/* Add collapsible sections here */}
              </Paper>
            </Box>
          </Box>
        </Box>

        {/* Snackbar for notifications */}
        <Snackbar
          open={showSnackbar.open}
          autoHideDuration={6000}
          onClose={() => setShowSnackbar({ ...showSnackbar, open: false })}
        >
          <Alert
            onClose={() => setShowSnackbar({ ...showSnackbar, open: false })}
            severity={showSnackbar.severity}
            sx={{ width: "100%" }}
          >
            {showSnackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </ErrorBoundary>
  );
};

export default RequestDetails;
