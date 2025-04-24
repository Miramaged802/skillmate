import React from "react";
import {
  Box,
  Typography,
  Chip,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import {
  Copy,
  CheckCircle,
  Clock,
  AlertCircle,
  Calendar,
  Info,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const getStatusColor = (status) => {
  switch (status?.toLowerCase()) {
    case "pending":
      return "warning";
    case "in progress":
      return "info";
    case "completed":
      return "success";
    case "cancelled":
      return "error";
    default:
      return "default";
  }
};

const getStatusIcon = (status) => {
  switch (status?.toLowerCase()) {
    case "pending":
      return <Clock size={16} />;
    case "in progress":
      return <AlertCircle size={16} />;
    case "completed":
      return <CheckCircle size={16} />;
    default:
      return <Info size={16} />;
  }
};

const RequestHeader = ({
  requestId,
  status,
  createdAt,
  lastUpdated,
  serviceType,
  onCopyId,
}) => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: 2,
        p: 3,
        mb: 3,
        boxShadow: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {/* Request ID and Status */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography variant="h6" component="span">
              {t("request.requestId")}:
            </Typography>
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontFamily: "monospace",
                color: "primary.main",
              }}
            >
              {requestId}
            </Typography>
            <Tooltip title={t("common.copy")}>
              <IconButton
                size="small"
                onClick={onCopyId}
                sx={{ color: "primary.main" }}
              >
                <Copy size={16} />
              </IconButton>
            </Tooltip>
          </Box>

          <Chip
            icon={getStatusIcon(status)}
            label={t(`request.status.${status?.toLowerCase()}`)}
            color={getStatusColor(status)}
            sx={{
              ml: { xs: 0, sm: 2 },
              mt: { xs: 1, sm: 0 },
            }}
          />
        </Box>

        {/* Timestamps */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 2,
            color: "text.secondary",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Calendar size={16} />
            <Typography variant="body2">
              {t("request.createdAt")}:{" "}
              {new Date(createdAt).toLocaleString(i18n.language)}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Clock size={16} />
            <Typography variant="body2">
              {t("request.lastUpdated")}:{" "}
              {new Date(lastUpdated).toLocaleString(i18n.language)}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Service Type */}
      {serviceType && (
        <Box
          sx={{
            mt: 2,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Info size={16} />
          <Typography variant="body2" color="text.secondary">
            {t("request.serviceType")}: {serviceType}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default RequestHeader;
