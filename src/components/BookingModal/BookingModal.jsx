import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';
import StepDate from './StepDate';
import StepSlots from './StepSlots';
import StepDetails from './StepDetails';
import StepReview from './StepReview';
import StepConfirmation from './StepConfirmation';
import { getLocalDateString, isValidDateString } from './dateUtils';

export default function BookingModal({
  isOpen,
  onClose,
  initialSport = null,
  initialPromo = '',
  onShowToast
}) {
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [sport, setSport] = useState(initialSport && initialSport !== 'both' ? initialSport : null);
  const [selectedDate, setSelectedDate] = useState(() => getLocalDateString());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [details, setDetails] = useState({
    name: '',
    phone: '',
    email: '',
    groupSize: 10,
    extraBibs: true
  });
  const [errors, setErrors] = useState({});
  const [promoCode, setPromoCode] = useState(initialPromo);
  const [discountApplied, setDiscountApplied] = useState(!!initialPromo);
  const [bookingCode, setBookingCode] = useState('');

  // Start each new booking at date selection with fresh, local-date state.
  useEffect(() => {
    if (!isOpen) return;
    setCurrentStep(1);
    setSport(initialSport && initialSport !== 'both' ? initialSport : null);
    setSelectedDate(getLocalDateString());
    setSelectedSlot(null);
    setDetails({ name: '', phone: '', email: '', groupSize: 10, extraBibs: true });
    setErrors({});
    setPromoCode(initialPromo || '');
    setDiscountApplied(!!initialPromo);
    setBookingCode('');
  }, [initialSport, initialPromo, isOpen]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateDetails = () => {
    const newErrors = {};
    if (!details.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    const cleanPhone = details.phone.replace(/\D/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Mobile number is required';
    } else if (cleanPhone.length !== 10 || !/^[6-9]/.test(cleanPhone)) {
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number (starts with 6-9)';
    }

    if (details.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!isValidDateString(selectedDate)) {
        onShowToast('Select Date', 'Please pick a valid booking date to continue');
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!selectedSlot) {
        onShowToast('Select Slot', 'Please select an available time slot');
        return;
      }
      setCurrentStep(3);
    } else if (currentStep === 3) {
      if (!validateDetails()) {
        return;
      }
      setCurrentStep(4);
    } else if (currentStep === 4) {
      // Generate realistic booking reference code
      const generatedCode = `GO-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingCode(generatedCode);
      setCurrentStep(5);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setSelectedDate(getLocalDateString());
    setSelectedSlot(null);
    setBookingCode('');
    setDetails({
      name: '',
      phone: '',
      email: '',
      groupSize: 10,
      extraBibs: true
    });
    setErrors({});
    setPromoCode('');
    setDiscountApplied(false);
  };

  const handleFieldChange = (field, val) => {
    setDetails((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const basePrice = selectedSlot?.price || (sport === 'cricket' ? 600 : sport === 'football' ? 800 : 700);
  const discountAmount = discountApplied ? Math.round(basePrice * 0.20) : 0;
  const finalPrice = Math.max(0, basePrice - discountAmount);

  const stepTitles = [
    'Select Date',
    'Choose Time Slot',
    'Squad Details',
    'Review Booking',
    'Confirmation'
  ];

  return (
    <div className="modal-backdrop booking-modal-backdrop" onClick={onClose}>
      <div className="booking-modal-dialog glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Header Bar */}
        <div className="booking-modal-header">
          <div className="modal-header-info">
            <div className="step-count-badge">
              {currentStep < 5 ? `Step ${currentStep} of 4` : 'Booking Complete'}
            </div>
            <h3 className="modal-top-heading">{stepTitles[currentStep - 1]}</h3>
          </div>

          <button
            type="button"
            className="modal-close-btn button-rotate"
            onClick={onClose}
            aria-label="Close booking modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Step Progress Bar */}
        {currentStep < 5 && (
          <div className="booking-progress-track">
            <div
              className="booking-progress-fill"
              style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
            ></div>
          </div>
        )}

        {/* Step Content Body */}
        <div className="booking-modal-body">
          {currentStep === 1 && (
            <StepDate
              selectedDate={selectedDate}
              onSelectDate={(d) => {
                if (isValidDateString(d)) setSelectedDate(d);
                setSelectedSlot(null);
              }}
            />
          )}

          {currentStep === 2 && (
            <StepSlots
              selectedSlot={selectedSlot}
              onSelectSlot={(slot) => setSelectedSlot(slot)}
              selectedDate={selectedDate}
              sport={sport}
            />
          )}

          {currentStep === 3 && (
            <StepDetails
              details={details}
              onChangeDetails={handleFieldChange}
              errors={errors}
            />
          )}

          {currentStep === 4 && (
            <StepReview
              sport={sport}
              selectedDate={selectedDate}
              selectedSlot={selectedSlot}
              details={details}
              promoCode={promoCode}
              onApplyPromo={(code, applied) => {
                setPromoCode(code);
                setDiscountApplied(applied);
              }}
              discountApplied={discountApplied}
            />
          )}

          {currentStep === 5 && (
            <StepConfirmation
              bookingCode={bookingCode}
              sport={sport}
              selectedDate={selectedDate}
              selectedSlot={selectedSlot}
              details={details}
              finalPrice={finalPrice}
              onReset={handleReset}
              onClose={onClose}
              onShowToast={onShowToast}
            />
          )}
        </div>

        {/* Modal Navigation Footer (Steps 1 to 5) */}
        {currentStep < 5 && (
          <div className="booking-modal-footer">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="btn btn-secondary btn-sm button-slide"
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>
            ) : (
              <div></div>
            )}

            <button
              type="button"
              onClick={handleNext}
              className="btn btn-primary btn-sm next-step-btn button-slide"
            >
              <span>{currentStep === 4 ? 'Confirm & Reserve Slot' : 'Continue'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
