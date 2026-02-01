"use client";

export function FooterMap() {
  // Google Maps embed URL for Chișinău (placeholder location)
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.4!2d28.8!3d47.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDAwJzAwLjAiTiAyOMKwNDgnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890";

  return (
    <div className="w-full h-full min-h-[300px] lg:min-h-full">
      <iframe
        src={mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0, filter: "grayscale(50%) contrast(1.1)" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="REBALANCE Location"
        className="w-full h-full min-h-[300px] lg:min-h-full"
      />
    </div>
  );
}
