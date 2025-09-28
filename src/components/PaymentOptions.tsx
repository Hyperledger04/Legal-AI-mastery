import { QrCode, CreditCard, Building2, Globe, Copy, Check } from "lucide-react";
import { useState } from "react";

const PaymentOptions = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const bankDetails = {
    name: "BRAHM SAREEN",
    bankName: "YES BANK",
    branch: "MEERA BAGH, PASCHIM VIHAR, DELHI",
    accountNumber: "018590700001679",
    ifscCode: "YESB0000185"
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4 text-foreground">Choose Your Payment Method</h3>
        <p className="text-muted-foreground">Secure payment options for your convenience</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* UPI Payment */}
        <div className="card-interactive group">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <QrCode className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground">UPI Payment</h4>
                <p className="text-sm text-muted-foreground">Scan QR code with any UPI app</p>
              </div>
            </div>

            {/* QR Code */}
            <div className="bg-white p-6 rounded-xl border-2 border-gray-200 mb-4 flex flex-col items-center">
              <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center mb-4 border border-gray-200">
                {/* Replace this with your actual QR code image */}
                <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <QrCode className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                    <p className="text-xs text-gray-500">QR Code Image</p>
                    <p className="text-xs text-gray-400 mt-1">Replace with actual QR</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-gray-700 mb-1">UPI ID</p>
                <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                  <span className="text-sm font-mono">8851397291@ptsbi</span>
                  <button
                    onClick={() => copyToClipboard("8851397291@ptsbi", "upi")}
                    className="p-1 hover:bg-gray-200 rounded"
                  >
                    {copiedField === "upi" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Compatible with:</span>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Paytm</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">PhonePe</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">Google Pay</span>
                <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">BHIM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bank Transfer */}
        <div className="card-interactive group">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground">Bank Transfer</h4>
                <p className="text-sm text-muted-foreground">Net banking & International payments</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Account Holder */}
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Account Holder</p>
                  <p className="font-medium text-foreground">{bankDetails.name}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(bankDetails.name, "name")}
                  className="p-2 hover:bg-gray-200 rounded"
                >
                  {copiedField === "name" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Bank Name */}
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Bank Name</p>
                  <p className="font-medium text-foreground">{bankDetails.bankName}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(bankDetails.bankName, "bank")}
                  className="p-2 hover:bg-gray-200 rounded"
                >
                  {copiedField === "bank" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Account Number */}
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Account Number</p>
                  <p className="font-medium text-foreground font-mono">{bankDetails.accountNumber}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(bankDetails.accountNumber, "account")}
                  className="p-2 hover:bg-gray-200 rounded"
                >
                  {copiedField === "account" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* IFSC Code */}
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">IFSC Code</p>
                  <p className="font-medium text-foreground font-mono">{bankDetails.ifscCode}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(bankDetails.ifscCode, "ifsc")}
                  className="p-2 hover:bg-gray-200 rounded"
                >
                  {copiedField === "ifsc" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Branch */}
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Branch</p>
                  <p className="font-medium text-foreground">{bankDetails.branch}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(bankDetails.branch, "branch")}
                  className="p-2 hover:bg-gray-200 rounded"
                >
                  {copiedField === "branch" ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-blue-800">International Payments</p>
                  <p className="text-xs text-blue-600">Use these details for international wire transfers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
        <h4 className="font-bold text-foreground mb-3">Payment Instructions</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>After payment, send a screenshot to confirm your enrollment</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>You will receive course access within 24 hours</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <span>For any payment issues, contact us immediately</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PaymentOptions;
